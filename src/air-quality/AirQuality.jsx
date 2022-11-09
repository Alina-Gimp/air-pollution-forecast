import React from 'react';
import './AirQualityStyle.css';
import useGetAirPollutionData from './hook/useGetAirPollutionData';

function AirQuality() {
    const forecastAirPollution = useGetAirPollutionData();
    console.log(forecastAirPollution);
    const weekDay = forecastAirPollution.map((air) => new Date(air.dt * 1000));
    console.log(weekDay);
    const displayData = forecastAirPollution.map((air) => air.main.aqi);

    return (
        <div>
            <div className="header">
                <h1>Любляна</h1>
            </div>
            <div className="blocks">
                <div className="block">
                    {
                        weekDay.map((date, index) => (
                            <div className="day">{""+date}</div>
                            )
                        )
                    }
                    <div className="indexQuality">{displayData}</div>
                    <div className="icons"></div>
                    <div className="components">
                        <div>
                            <p>
                                CO:
                                {}
                            </p>
                            <p>
                                NO:
                                {}
                            </p>
                            <p>
                                NO2:
                                {}
                            </p>
                            <p>
                                O3:
                                {}
                            </p>
                        </div>
                        <div>
                            <p>
                                SO2:
                                {}
                            </p>
                            <p>
                                PM2.5:
                                {}
                            </p>
                            <p>
                                PM10:
                                {}
                            </p>
                            <p>
                                NH3:
                                {}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AirQuality;
