import React from 'react';
import '../AirQualityStyle.css';
import information from '../IconsAir/information.png';

function AirStatusDescriptionView({ description }) {
    return (
      <div className="descriptionDiv">
        <img
          className="iconStatus"
          src={description.icon}
          alt={description.alt}
        />
        <div className="infoStatus">
          <div className="divStatusName">
            <p className="statusName" style={{ color: description.color }}>{description.name}</p>
          </div>
          <div className="infoIcon">
            <img
              className="info"
              src={information}
              alt="icon: info"
              title={description.hint}
            />
          </div>
        </div>
      </div>
    );
}

export default AirStatusDescriptionView;
