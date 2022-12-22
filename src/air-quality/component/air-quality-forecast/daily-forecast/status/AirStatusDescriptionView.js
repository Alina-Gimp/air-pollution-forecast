import React from 'react';
import '../../../../styles/AirQualityStyle.css';
import information from '../pollution/pollution-icons/information.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
          <Tippy content={description.title}>
          <img
            className="info"
            src={information}
            alt="icon: info"
          />
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default AirStatusDescriptionView;
