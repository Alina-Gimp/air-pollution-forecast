import React from 'react';

function PollutionElement({name, value, icon}) {
  return (
    <div className="component">
      <div>
        <img
          className="iconPollution"
          src={icon}
          alt={name}
          title={name}
        />
      </div>
      <div className="concentration">{value}</div>
    </div>
  );
}

export default PollutionElement;