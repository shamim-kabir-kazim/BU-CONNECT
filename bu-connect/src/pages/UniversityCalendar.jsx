import React, { useState, useEffect } from 'react';
import './UniversityCalendar.css'; // CSS is separated for better organization

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const UniversityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({
    // Example format
    // '2025-06-05': [{ title: 'Orientation', desc: 'Freshers 2025' }]
  });

  useEffect(() => {
    renderCalendar();
  }, [currentDate]);

  const getFormattedDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const alertDayEvents = (date) => {
    if (events[date]?.length) {
      const eventList = events[date].map(e => `${e.title}: ${e.desc}`).join('\n');
      alert(`University Events for ${date}:\n${eventList}`);
    } else {
      alert(`No university events for ${date}`);
    }
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day" />);
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateStr = getFormattedDate(year, month, day);
      days.push(
        <div key={dateStr} className="day" onClick={() => alertDayEvents(dateStr)}>
          <strong>{day}</strong>
          {events[dateStr]?.map((event, index) => (
            <div key={index} className="event">
              {event.title}: {event.desc}
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => changeMonth(-1)}>Prev</button>
        <h2>
          {currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}
        </h2>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
      <div className="days">
        {daysOfWeek.map((day, i) => (
          <div key={i} className="day-header">{day}</div>
        ))}
      </div>
      <div className="days">{renderCalendar()}</div>
    </div>
  );
};

export default UniversityCalendar;
