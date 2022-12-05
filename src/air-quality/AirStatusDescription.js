import React from 'react';
import './AirQualityStyle.css';
import goodAir from './IconsAir/goodAir.png';
import poorAir from './IconsAir/poorAir.png';
import information from './IconsAir/information.png';

function AirStatusDescription({ statusAir }) {
  if (statusAir < 2) {
    return (
      <div style={{flex: 1, display: "flex"}}>
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="infoStatus">
          <div className="divStatusName">
            <p className="statusName" style={{ color: '#3BD614' }}>Good</p>
          </div>
          <div className="infoIcon">
            <img
              className="info"
              src={information}
              alt="icon: info"
              title="Fresh air"
            />
          </div>
        </div>
      </div>
    );
  }

  if (statusAir < 3) {
    return (
      <div style={{flex: 1, display: "flex"}}>
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#4DAB2C' }}>Fair</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Sensitive people may need a mask"
          />
        </div>

      </div>
    );
  }

  if (statusAir < 4) {
    return (
      <div style={{flex: 1, display: "flex"}}>
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#7EBD18' }}>Moderate</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Sensitive people may need a mask"
          />
        </div>

      </div>
    );
  }

  if (statusAir < 5) {
    return (
      <>
        {' '}
        <img className="iconStatus" src={poorAir} alt="icon: poor air" />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#BD9918' }}>Poor</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="The air is unhealthy"
          />
        </div>

      </>
    );
  }

  if (statusAir < 6) {
    return (
      <>
        {' '}
        <img
          className="iconStatus"
          src={poorAir}
          alt="icon: poor air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#BD3518' }}>Very Poor</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Air is dangerous for health"
          />
        </div>

      </>
    );
  }

  return (
    { statusAir }
  );
}

export default AirStatusDescription;
