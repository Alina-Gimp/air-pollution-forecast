import React from 'react';
import './AirQualityStyle.css';
import trees from './IconsAir/trees (1).png';
import openWindows from './IconsAir/openWindows.png';
import mask from './IconsAir/mask.png';
import window from './IconsAir/window.png';
import airFilter from './IconsAir/airFilter.png';

function Recommendation({ statusAir }) {
  if (statusAir < 2) {
    return (
      <div style={{flex: 1}}>
        <div className="blocksRecommendations">
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={trees}
                alt="icon: trees"
              />
            </div>
            <div className="recommendation">Walk outdoors</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={openWindows}
                alt="icon: open window"
              />
            </div>
            <div className="recommendation">Ventilate the house</div>
          </div>
        </div>
      </div>
    );
  }

  if (statusAir < 3) {
    return (
      <div style={{flex: 1}}>
        <div className="blocksRecommendations">
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={trees}
                alt="icon: trees"
              />
            </div>
            <div className="recommendation">Walk outdoors</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={openWindows}
                alt="icon: open window"
              />
            </div>
            <div className="recommendation">Ventilate the house</div>
          </div>
        </div>
      </div>
    );
  }

  if (statusAir < 4) {
    return (
      <>
        <div className="blocksRecommendations">
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={trees}
                alt="icon: trees"
              />
            </div>
            <div className="recommendation">Walk outdoors</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={openWindows}
                alt="icon: open window"
              />
            </div>
            <div className="recommendation">Ventilate the house</div>
          </div>
        </div>
      </>
    );
  }

  if (statusAir < 5) {
    return (
      <>
        <div className="blocksRecommendations">
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={mask}
                alt="icon: mask"
              />
            </div>
            <div className="recommendation">Wear a mask</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={window}
                alt="icon: close window"
              />
            </div>
            <div className="recommendation">Close windows</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={airFilter}
                alt="icon: air filter"
              />
            </div>
            <div className="recommendation">Use an air purifier</div>
          </div>
        </div>
      </>
    );
  }

  if (statusAir < 6) {
    return (
      <>
        <div className="blocksRecommendations">
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={mask}
                alt="icon: mask"
              />
            </div>
            <div className="recommendation">Wear a mask</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={window}
                alt="icon: close window"
              />
            </div>
            <div className="recommendation">Close windows</div>
          </div>
          <div className="blockRecommendation">
            <div>
              <img
                className="iconRecommendation"
                src={airFilter}
                alt="icon: air filter"
              />
            </div>
            <div className="recommendation">Use an air purifier</div>
          </div>
        </div>
      </>
    );
  }

  return (
    { statusAir }
  );
}

export default Recommendation;
