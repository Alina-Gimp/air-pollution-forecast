import React from 'react';
import RecommendationElement from "./RecommendationElement";

function Recommendations({recommendations}) {
  return (
    <div className="recommendationDiv">
      <div className="blocksRecommendations">
        {
          recommendations.map((recommendation) => (
            <RecommendationElement
              recommendation={recommendation}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Recommendations;
