import React from 'react';

function RecommendationView({ recommendations }) {
    return (
        <div style={{flex: 1}}>
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
                            <div className="recommendation">{recommendation.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendationView;