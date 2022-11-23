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
            <div className="inputDiv"><input className="input" placeholder="Your city"/></div>
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
                                        <div className="component">
                                            <div><img className="iconPollution" src={co} alt="carbon monoxide"/></div>
                                            <div className="concentration">{pollution.co}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={no} alt="nitrogen monoxide"/></div>
                                            <div className="concentration">{pollution.no}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={no2} alt="nitrogen dioxide"/></div>
                                            <div className="concentration">{pollution.no2}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={o3} alt="ozone"/></div>
                                            <div className="concentration">{pollution.o3}</div>
                                        </div>
                                    </div>
                                    <div className="components_2">
                                        <div className="component">
                                            <div><img className="iconPollution" src={so2} alt="sulphur dioxide"/></div>
                                            <div className="concentration">{pollution.so2}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={pm2_5}
                                                      alt="fine particles matter"/></div>
                                            <div className="concentration">{pollution.pm2_5}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={pm10}
                                                      alt="coarse particulate matter"/></div>
                                            <div className="concentration">{pollution.pm10}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={nh3} alt="ammonia"/></div>
                                            <div className="concentration">{pollution.nh3}</div>
                                        </div>
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
