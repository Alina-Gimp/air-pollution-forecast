import React from 'react';
import DateView from "./common/DateView";
import AirStatusDescriptionView from "./status/AirStatusDescriptionView";
import Pollution from "./pollution/Pollution";
import Recommendations from "./recommendation/Recommendations";
import {mapQualityNumberToDescriptionElement} from "../../../mapper/AirQualityMapper";

function DailyForecast({dailyAverages}) {

  const {
    date,
    pollution,
  } = dailyAverages;

  const airStatus = mapQualityNumberToDescriptionElement(Math.round(pollution.aqi));
  const recommendations = airStatus.recommendations;

  return (
    <div className="block">
      <DateView
        date={date}
      />
      <div className="indexQuality">
        <AirStatusDescriptionView
          description={airStatus}
        />
        <Recommendations
          recommendations={recommendations}
        />
        <Pollution
          pollution={pollution}
        />
      </div>

    </div>
  );
}

export default DailyForecast;