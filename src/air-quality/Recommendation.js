import React from 'react';
import './AirQualityStyle.css';
import RecommendationView from "./recommendation/RecommendationView";
import AirQualityDescriptionEnum from "./description/AirQualityDescriptionEnum";

function Recommendation({ statusAir }) {
  if (statusAir < 2) {
    return (
      <RecommendationView
        recommendations={AirQualityDescriptionEnum.GOOD.recommendations}
        />
    );
  }

  if (statusAir < 3) {
    return (
        <RecommendationView
            recommendations={AirQualityDescriptionEnum.FAIR.recommendations}
        />
    );
  }

  if (statusAir < 4) {
    return (
        <RecommendationView
            recommendations={AirQualityDescriptionEnum.MODERATE.recommendations}
        />
    );
  }

  if (statusAir < 5) {
    return (
        <RecommendationView
            recommendations={AirQualityDescriptionEnum.POOR.recommendations}
        />
    );
  }

  if (statusAir < 6) {
    return (
        <RecommendationView
            recommendations={AirQualityDescriptionEnum.VERY_POOR.recommendations}
        />
    );
  }

}

export default Recommendation;
