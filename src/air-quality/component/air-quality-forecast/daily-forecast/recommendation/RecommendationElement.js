import React from 'react';

function RecommendationElement({ recommendation }) {
  const {
    icon,
    alt,
    text,
  } = recommendation;

  return (
    <div className="blockRecommendation">
      <div>
        <img
          className="iconRecommendation"
          src={icon}
          alt={alt}
        />
      </div>
      <div className="recommendation"><p className="recommendationText">{text}</p></div>
    </div>
  );
}

export default RecommendationElement;
