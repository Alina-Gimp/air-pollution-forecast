import React from 'react';
import Tippy from '@tippyjs/react';

function PollutionElement({name, value, icon}) {
  return (
    <div className="component">
      <div>
        <Tippy content={name}>
        <img
          className="iconPollution"
          src={icon}
          alt={name}
          title={name}
        />
        </Tippy>
      </div>
      <div className="concentration">{value}</div>
    </div>
  );
}

export default PollutionElement;