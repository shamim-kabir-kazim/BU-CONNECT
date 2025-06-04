import React from 'react';

export default function AdminContent() {
  return (
    <div
      className="content"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* con1 - small height */}
      <div
        className="con1"
        style={{
          height: '30%',
          backgroundColor: '#f2a2e8', // random light pink
        }}
      >
        con1
      </div>

      {/* con2 - 70% height */}
      <div
        className="con2"
        style={{
          height: '70%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#c2f0a2', // random green
        }}
      >
        {/* con2r1 - 75% width */}
        <div
          className="con2r1"
          style={{
            width: '75%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#a2d5f2', // random blue
          }}
        >
          {/* con2r1c1 */}
          <div
            className="con2r1c1"
            style={{
              flex: 1,
              backgroundColor: '#f2c2a2', // random orange
            }}
          >
            con2r1c1
          </div>

          {/* con2r1c2 */}
          <div
            className="con2r1c2"
            style={{
              flex: 1,
              backgroundColor: '#d1a2f2', // random purple
            }}
          >
            con2r1c2
          </div>
        </div>

        {/* con2r2 - 25% width */}
        <div
          className="con2r2"
          style={{
            width: '25%',
            backgroundColor: '#a2f2ea', // random teal
          }}
        >
          con2r2
        </div>
      </div>
    </div>
  );
}
