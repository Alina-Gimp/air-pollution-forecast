import React from 'react';
import './AirQualityStyle.css';
import goodAir from './IconsAir/goodAir.png';
import poorAir from './IconsAir/poorAir.png';
import trees from './IconsAir/trees (1).png';
import openWindows from './IconsAir/openWindows.png';
import mask from './IconsAir/mask.png';
import window from './IconsAir/window.png';
import airFilter from './IconsAir/airFilter.png';
import information from './IconsAir/information.png';

function DescriptionStatusAir({ statusAir }) {
  if (statusAir < 2) {
    return (
      <>
        {' '}
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="infoStatus">
          <div className="divStatusName">
            <p className="statusName" style={{ color: '#3BD614' }}>Good</p>
          </div>
          <div className="infoIcon">
            <img
              className="info"
              src={information}
              alt="icon: info"
              title="Fresh air"
            />
          </div>
        </div>
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

  if (statusAir < 3) {
    return (
      <>
        {' '}
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#4DAB2C' }}>Fair</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Sensitive people may need a mask"
          />
        </div>
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

  if (statusAir < 4) {
    return (
      <>
        {' '}
        <img
          className="iconStatus"
          src={goodAir}
          alt="icon: fresh air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#7EBD18' }}>Moderate</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Sensitive people may need a mask"
          />
        </div>
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
        {' '}
        <img className="iconStatus" src={poorAir} alt="icon: poor air" />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#BD9918' }}>Poor</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="The air is unhealthy"
          />
        </div>
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
        {' '}
        <img
          className="iconStatus"
          src={poorAir}
          alt="icon: poor air"
        />
        <div className="divStatusName">
          <p className="statusName" style={{ color: '#BD3518' }}>Very Poor</p>
        </div>
        <div className="infoIcon">
          <img
            className="info"
            src={information}
            alt="icon: info"
            title="Air is dangerous for health"
          />
        </div>
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

export default DescriptionStatusAir;
