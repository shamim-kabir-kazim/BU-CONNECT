import React from 'react';
import './DashboardCards.css';

const InfoCard = ({ type, total, male, female, icon, maleIcon, femaleIcon }) => (
  <div className="card">
    <div className="card-total">Total {total}</div>
    <img className="card-image" src={icon} alt={`${type} icon`} />
    <div className="card-footer">
      <div className="card-gender male">
        <img src={maleIcon} alt="Male" />
        <div>
          <span className="male-count">{male} </span>
          <span className="male-label">Male</span>
        </div>
      </div>
      <div className="card-gender female">
        <img src={femaleIcon} alt="Female" />
        <div>
          <span className="female-count">{female} </span>
          <span className="female-label">Female</span>
        </div>
      </div>
    </div>
  </div>
);

const DashboardCards = () => {
  return (
    <div className="dashboard-row">
      <InfoCard
        type="Student"
        total={500}
        male={300}
        female={200}
        icon="https://placehold.co/100x100?text=Student"
        maleIcon="https://placehold.co/16x16?text=M"
        femaleIcon="https://placehold.co/16x16?text=F"
      />
      <InfoCard
        type="Teacher"
        total={50}
        male={30}
        female={20}
        icon="https://placehold.co/100x100?text=Teacher"
        maleIcon="https://placehold.co/16x16?text=M"
        femaleIcon="https://placehold.co/16x16?text=F"
      />
      <InfoCard
        type="Staff"
        total={20}
        male={12}
        female={8}
        icon="https://placehold.co/100x100?text=Staff"
        maleIcon="https://placehold.co/16x16?text=M"
        femaleIcon="https://placehold.co/16x16?text=F"
      />
    </div>
  );
};

export default DashboardCards;
