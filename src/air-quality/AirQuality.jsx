import React from 'react';
import './AirQualityStyle.css';
import useGetAirPollutionData from './hook/useGetAirPollutionData';

function AirQuality() {
    const forecastAirPollutions = useGetAirPollutionData();

    return (
        <div className="airQuality">
            <h1 className="header">Ljubljana</h1>

            <div className="blocks">
                {forecastAirPollutions.map((forecastAirPollution) => {
                    const displayData = new Date(forecastAirPollution.dt * 1000).toDateString();
                    const statusAir = forecastAirPollution.main.aqi;
                    const pollution = forecastAirPollution.components;


                    return (

                        <div className="block">
                            <p className="weekdayName">
                                {displayData}
                            </p>
                            <p className="indexQuality">
                                {statusAir}
                            </p>
                            <div className="components">
                                <div className="components_1">
                                    <p>CO:{pollution.co}</p>
                                    <p>NO:{pollution.no}</p>
                                    <p>NO2:{pollution.no2}</p>
                                    <p>O3:{pollution.o3}</p>
                                </div>
                                <div className="components_2">
                                    <p>SO2:{pollution.so2}</p>
                                    <p>PM2.5:{pollution.pm2_5}</p>
                                    <p>PM10:{pollution.pm10}</p>
                                    <p>NH3:{pollution.nh3}</p>
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
