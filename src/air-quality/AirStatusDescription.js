import React from 'react';
import './AirQualityStyle.css';
import AirStatusDescriptionView from "./description/AirStatusDescriptionView";
import AirQualityDescriptionEnum from "./description/AirQualityDescriptionEnum";

function AirStatusDescription({ statusAir }) {
  if (statusAir < 2) {
    return <AirStatusDescriptionView
        description={AirQualityDescriptionEnum.GOOD}
    />
  }

  if (statusAir < 3) {
      return <AirStatusDescriptionView
          description={AirQualityDescriptionEnum.FAIR}
      />
  }

  if (statusAir < 4) {
    return <AirStatusDescriptionView
        description={AirQualityDescriptionEnum.MODERATE}
    />

  }

  if (statusAir < 5) {
    return <AirStatusDescriptionView
            description={AirQualityDescriptionEnum.POOR}
        />
  }

  if (statusAir < 6) {
    return <AirStatusDescriptionView
        description={AirQualityDescriptionEnum.VERY_POOR}
    />
  }

}

export default AirStatusDescription;
