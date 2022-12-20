import React, {useState} from 'react';
import './AirQualityStyle.css';
import useGetAirPollutionData from './hook/useGetAirPollutionData';
import SimpleAccordion from './faqComponent/FaqComponent';
import Pollution from './pollution/Pollution';
import DateView from './dateView/DateView';
import { mapQualityNumberToDescriptionElement } from './description/AirQualityMapper';
import RecommendationView from './recommendation/RecommendationView';
import AirStatusDescriptionView from './description/AirStatusDescriptionView';
import InputCity from './inputCity/InputCity';
import useGetCoordinatesByAddressName from "./hook/useGetCoordinatesByAddressName";


function AirQuality() {
  const [city, setCity] = useState("");
  const [isCityConfirmed, setCityConfirmed] = useState(false);

  const addresses = useGetCoordinatesByAddressName(city);
  console.log(addresses);
  const firstAddress = !!addresses && addresses.length > 0 && addresses[0] || {};
  const displayAddress = isCityConfirmed ? firstAddress.name : "";

  const suggestions = addresses && addresses.map(address => address.name) || [];
  console.log(suggestions);

  const forecastAirPollutions = useGetAirPollutionData(firstAddress.coordinates, isCityConfirmed);

  const result = new Map();
  forecastAirPollutions.forEach((forecast) => {
    const day = new Date(forecast.dt * 1000).toLocaleDateString('en-us', { weekday: 'long' });

    if (!result.has(day)) {
      result.set(day, []);
    }

    result.get(day).push(forecast);
  });

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
      aqi: 0,
    });

    oneDaySum.co = Number(oneDaySum.co / value.length).toFixed(1);
    oneDaySum.no = Number(oneDaySum.no / value.length).toFixed(2);
    oneDaySum.no2 = Number(oneDaySum.no2 / value.length).toFixed(1);
    oneDaySum.o3 = Number(oneDaySum.o3 / value.length).toFixed(1);
    oneDaySum.so2 = Number(oneDaySum.so2 / value.length).toFixed(1);
    oneDaySum.pm2_5 = Number(oneDaySum.pm2_5 / value.length).toFixed(1);
    oneDaySum.pm10 = Number(oneDaySum.pm10 / value.length).toFixed(1);
    oneDaySum.nh3 = Number(oneDaySum.nh3 / value.length).toFixed(1);
    oneDaySum.aqi = Number(oneDaySum.aqi / value.length);

    forShow.push({ date: key, pollution: oneDaySum });
  });


  return (
    <div className="airQuality">
      <h1 className="header">Air pollution forecast</h1>
      <div className="buttonAndInput">
        <div className="inputDiv">
          <InputCity
              saveCity={setCity}
              confirmCity={setCityConfirmed}
              datalist={suggestions}
          />
        </div>
      </div>
      <h3 className="city">{displayAddress}</h3>
      <div className="blocks">
        {forShow.map((pollutionOn, index) => {
          const { pollution } = pollutionOn;
          const { date } = pollutionOn;
          const statusAir = Math.round(pollution.aqi);

          return (

            <div className="block">
              <DateView
                date={date}
              />
              <div className="indexQuality">
                <AirStatusDescriptionView
                  description={mapQualityNumberToDescriptionElement(statusAir)}
                />
                <RecommendationView
                  recommendations={mapQualityNumberToDescriptionElement(statusAir).recommendations}
                />
                <Pollution
                  index={index}
                  pollution={pollution}
                />
              </div>

            </div>
          );
        })}
      </div>
      <SimpleAccordion />
    </div>
  );
}

export default AirQuality;
