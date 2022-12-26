import React from 'react';
import useGetAirPollutionData from "../../hook/useGetAirPollutionData";
import {mapAirQualityApiToDailyAverageSummary} from "../../mapper/AirQualityApiMapper";
import DailyForecast from "./daily-forecast/DailyForecast";

function AirQualityForecast({displayAddress, coordinates, isCityConfirmed}) {
  const forecastAirPollutions = useGetAirPollutionData(coordinates, isCityConfirmed);
  const airQualityApiDailyAverageSummary = mapAirQualityApiToDailyAverageSummary(forecastAirPollutions);

  return (
    <>
      <h2 className="city">{displayAddress}</h2>
      <div className="blocks">
        {
          airQualityApiDailyAverageSummary.map((dailyAverages, index) => (
            <DailyForecast
              key={index}
              dailyAverages={dailyAverages}
            />
          ))
        }
      </div>
    </>
  );
}

export default AirQualityForecast;