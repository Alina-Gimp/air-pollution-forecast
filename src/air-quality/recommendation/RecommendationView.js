import React from 'react';

function RecommendationView({ recommendations }) {
    return (
        <div className="recommendationDiv" style={{flex: 1}}>
            <div className="blocksRecommendations">
                {
                    recommendations.map(recommendation => (
                        <div className="blockRecommendation">
                            <div>
                                <img
                                    className="iconRecommendation"
                                    src={recommendation.icon}
                                    alt={recommendation.alt}
                                />
                            </div>
                          <div className="recommendation"><p className="recommendationText">{recommendation.text}</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendationView;