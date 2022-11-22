import React from 'react';
import './AirQualityStyle.css';
import useGetAirPollutionData from './hook/useGetAirPollutionData';
import DescriptionStatusAir from './DescriptionStatusAir';
import co from './IconsAir/co.png';
import no from './IconsAir/no.png';
import no2 from './IconsAir/no2.png';
import o3 from './IconsAir/o3.png';
import pm2_5 from './IconsAir/pm2_5.png';
import pm10 from './IconsAir/pm10.png';
import so2 from './IconsAir/so2.png';
import nh3 from './IconsAir/nh3.png';


function AirQuality() {
  const forecastAirPollutions = useGetAirPollutionData();

  return (
    <div className="airQuality">
      <h1 className="header">Air pollution forecast for 5 days</h1>
      <h3 className="city">Ljubljana</h3>

      <div className="blocks">
        {forecastAirPollutions.map((forecastAirPollution) => {
          const displayData = new Date(forecastAirPollution.dt * 1000).toDateString();
          const pollution = forecastAirPollution.components;
          const statusAir = forecastAirPollution.main.aqi;

          return (

            <div className="block">
              <div className="weekdayName">
                {displayData}</div>
                  <div className="pollutions">Pollutions, μg/m3:</div>
              <div className="indexQuality">
                <DescriptionStatusAir
                  statusAir={statusAir}
                />
                <div className="components">
                  <div className="components_1">
                    <div><img className="iconPollution" src={co} alt="carbon monoxide" />
                    {pollution.co}</div>
                    <div><img className="iconPollution" src={no} alt="nitrogen monoxide" />
                        {pollution.no}</div>
                    <div><img className="iconPollution" src={no2} alt="nitrogen dioxide" />
                        {pollution.no2}</div>
                    <div><img className="iconPollution" src={o3} alt="ozone" />
                        {pollution.o3}</div>
                  </div>
                  <div className="components_2">
                    <div><img className="iconPollution" src={so2} alt="sulphur dioxide" />
                        {pollution.so2}</div>
                    <div><img className="iconPollution" src={pm2_5} alt="fine particles matter" />
                        {pollution.pm2_5}</div>
                    <div><img className="iconPollution" src={pm10} alt="coarse particulate matter" />
                        {pollution.pm10}</div>
                    <div><img className="iconPollution" src={nh3} alt="ammonia" />
                        {pollution.nh3}</div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AirQuality;
