import React from 'react';
import co from './pollution-icons/co.png';
import no from './pollution-icons/no.png';
import no2 from './pollution-icons/no2.png';
import o3 from './pollution-icons/o3.png';
import so2 from './pollution-icons/so2.png';
import pm2_5 from './pollution-icons/pm2_5.png';
import pm10 from './pollution-icons/pm10.png';
import nh3 from './pollution-icons/nh3.png';
import PollutionElement from "./PollutionElement";


function Pollution({pollution}) {
  const {
    co: carbonMonoxide = 0,
    no: nitrogenMonoxide = 0,
    no2: nitrogenDioxide = 0,
    o3: ozone = 0,
    so2: sulphurDioxide = 0,
    pm2_5: fineParticlesMatter = 0,
    pm10: coarseParticulateMatter = 0,
    nh3: ammonia = 0,
  } = pollution;

  return (
    <div className="components">
      <div className="pollutions"><p className="">Pollutions, μg/m3:</p></div>
      <div className="components_1_2">
        <div className="components_1">
          <PollutionElement
            name="Carbon monoxide(CO)"
            value={carbonMonoxide}
            icon={co}
          />
          <PollutionElement
            name="Nitrogen monoxide(NO)"
            value={nitrogenMonoxide}
            icon={no}
          />
          <PollutionElement
            name="Nitrogen dioxide (NO2)"
            value={nitrogenDioxide}
            icon={no2}
          />
          <PollutionElement
            name="Ozone (O3)"
            value={ozone}
            icon={o3}
          />
        </div>
        <div className="components_2">
          <PollutionElement
            name="Sulphur dioxide (SO2)"
            value={sulphurDioxide}
            icon={so2}
          />
          <PollutionElement
            name="Fine particles matter (PM2.5)"
            value={fineParticlesMatter}
            icon={pm2_5}
          />
          <PollutionElement
            name="Coarse particulate matter (PM10)"
            value={coarseParticulateMatter}
            icon={pm10}
          />
          <PollutionElement
            name="Ammonia (NH3)"
            value={ammonia}
            icon={nh3}
          />
      </div>
          </div>
      </div>
  );
}

export default Pollution;
