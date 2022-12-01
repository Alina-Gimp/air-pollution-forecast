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

    const result = new Map();
    forecastAirPollutions.forEach(forecast => {
        const day = new Date(forecast.dt * 1000).toLocaleDateString('en-us', { weekday: 'long' });


        if (!result.has(day)) {
            result.set(day, [])
        }

        result.get(day).push(forecast);
    })

    const forShow = [];
    result.forEach((value, key) => {
        const oneDaySum = value.reduce((accumulator, element) => {
            accumulator.co += element.components.co;
            accumulator.no += element.components.no;
            accumulator.no2 += element.components.no2;
            accumulator.o3 += element.components.o3;
            accumulator.so2 += element.components.so2;
            accumulator.pm2_5 += element.components.pm2_5;
            accumulator.pm10 += element.components.pm10;
            accumulator.nh3 += element.components.nh3;
            accumulator.aqi += element.main.aqi;

            return accumulator;
        }, {
            co: 0,
            no: 0,
            no2: 0,
            o3: 0,
            so2: 0,
            pm2_5: 0,
            pm10: 0,
            nh3: 0,
            aqi: 0
        })

        oneDaySum.co = Number(oneDaySum.co / value.length).toFixed(1);
        oneDaySum.no = Number(oneDaySum.no / value.length).toFixed(2);
        oneDaySum.no2 = Number(oneDaySum.no2 / value.length).toFixed(1);
        oneDaySum.o3 = Number(oneDaySum.o3 / value.length).toFixed(1);
        oneDaySum.so2 = Number(oneDaySum.so2 / value.length).toFixed(1);
        oneDaySum.pm2_5 = Number(oneDaySum.pm2_5 / value.length).toFixed(1);
        oneDaySum.pm10 = Number(oneDaySum.pm10 / value.length).toFixed(1);
        oneDaySum. nh3 = Number(oneDaySum. nh3 / value.length).toFixed(1);
        oneDaySum. aqi = Number(oneDaySum. aqi / value.length)

        forShow.push({date: key, pollution: oneDaySum});
    })

    console.log(forShow);

    return (
        <div className="airQuality">
            <h1 className="header">Air pollution forecast</h1>
            <div className="inputDiv"><input className="input" placeholder="Your city"/></div>
            <h3 className="city">Ljubljana</h3>
            <div className="blocks">
                {forShow.map((pollutionOn, index) => {
                    /*const displayData = new Date(forecastAirPollution.dt * 1000).toDateString();
                    const pollution = forecastAirPollution.components;
                    const statusAir = forecastAirPollution.main.aqi;
                    */
                    const pollution = pollutionOn.pollution;
                    const date = pollutionOn.date;
                    const statusAir = pollution.aqi;


                    return (

                        <div className="block">
                            <div className="weekdayName">
                                {date}</div>
                            <div className="pollutions">Pollutions, μg/m3:</div>
                            <div className="indexQuality">
                                <DescriptionStatusAir
                                    statusAir={statusAir}
                                />
                                <div className="components">
                                    <div className="components_1">
                                        <div className="component">
                                            <div><img className="iconPollution" src={co} alt="Carbon monoxide(CO)" title="Carbon monoxide (CO)"/></div>
                                            <div className="concentration" key={index}>{pollution.co}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={no} alt="Nitrogen monoxide(NO)" title="Nitrogen monoxide (NO)"/></div>
                                            <div className="concentration" key={index}>{pollution.no}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={no2} alt="Nitrogen dioxide(NO2)" title="Nitrogen dioxide (NO2)"/></div>
                                            <div className="concentration" key={index}>{pollution.no2}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={o3} alt="Ozone" title="Ozone (O3)"/></div>
                                            <div className="concentration" key={index}>{pollution.o3}</div>
                                        </div>
                                    </div>
                                    <div className="components_2">
                                        <div className="component">
                                            <div><img className="iconPollution" src={so2} alt="Sulphur dioxide(SO2)" title="Sulphur dioxide (SO2)"/></div>
                                            <div className="concentration" key={index}>{pollution.so2}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={pm2_5}
                                                      alt="Fine particles matter(PM2_5)" title="Fine particles matter (PM2.5)"/></div>
                                            <div className="concentration" key={index}>{pollution.pm2_5}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={pm10}
                                                      alt="Coarse particulate matter" title="Coarse particulate matter (PM10)"/></div>
                                            <div className="concentration" key={index}>{pollution.pm10}</div>
                                        </div>
                                        <div className="component">
                                            <div><img className="iconPollution" src={nh3} alt="Ammonia(NH3)" title="Ammonia (NH3)"/></div>
                                            <div className="concentration" key={index}>{pollution.nh3}</div>
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
