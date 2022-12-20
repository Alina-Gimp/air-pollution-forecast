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
  } = pollution;

  return (
    <div className="components">
      <div className="pollutions"><p className="">Pollutions, μg/m3:</p></div>
      <div className="components_1_2">
        <div className="components_1">
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={co}
                alt="Carbon monoxide(CO)"
                title="Carbon monoxide (CO)"
              />
            </div>
            <div className="concentration">{carbonMonoxide}</div>
          </div>
          <PollutionElement
            name="Nitrogen monoxide(NO)"
            value={nitrogenMonoxide}
            icon={no}
          />
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={no2}
                alt="Nitrogen dioxide(NO2)"
                title="Nitrogen dioxide (NO2)"
              />
            </div>
            <div className="concentration">{pollution.no2}</div>
          </div>
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={o3}
                alt="Ozone"
                title="Ozone (O3)"
              />
            </div>
            <div className="concentration">{pollution.o3}</div>
          </div>
        </div>
        <div className="components_2">
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={so2}
                alt="Sulphur dioxide(SO2)"
                title="Sulphur dioxide (SO2)"
              />
            </div>
            <div className="concentration">{pollution.so2}</div>
          </div>
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={pm2_5}
                alt="Fine particles matter(PM2_5)"
                title="Fine particles matter (PM2.5)"
              />
            </div>
            <div className="concentration">{pollution.pm2_5}</div>
          </div>
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={pm10}
                alt="Coarse particulate matter"
                title="Coarse particulate matter (PM10)"
              />
            </div>
            <div className="concentration">{pollution.pm10}</div>
          </div>
          <div className="component">
            <div>
              <img
                className="iconPollution"
                src={nh3}
                alt="Ammonia(NH3)"
                title="Ammonia (NH3)"
              />
            </div>
            <div className="concentration">{pollution.nh3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pollution;
