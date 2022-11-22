import React from 'react';
import './AirQualityStyle.css';
import good from './IconsAir/good.png';
import poor from './IconsAir/poor.png';
import trees from './IconsAir/trees (1).png';
import open_windows from './IconsAir/open_windows.png';
import mask from './IconsAir/mask.png';
import window from './IconsAir/window.png';
import air_filter from './IconsAir/air_filter.png';


function DescriptionStatusAir({statusAir}) {
    if (statusAir === 1) {
        return (
            <>
                {' '}
                <img className="iconStatus" src={good}/>
                <p className="statusName" style={{color: '#3BD614'}}>Good</p>
                <div>
                    <div>
                        <div><img className="iconRecommendation" src={trees}/></div>
                        <div className="recommendation">Walk outdoors</div>
                    </div>
                    <div>
                    <div><img className="iconRecommendation" src={open_windows}/></div>
                    <div className="recommendation">Ventilate the house</div>
                    </div>
                </div>
            </>
        );
    }

    if (statusAir === 2) {
        return (
            <>
                {' '}
                <img className="iconStatus" src={good}/>
                <p className="statusName" style={{color: '#4DAB2C'}}>Fair</p>
                <div>
                    <div>
                    <div><img className="iconRecommendation" src={trees}/></div>
                    <div className="recommendation">Walk outdoors</div>
                    </div>
                    <div>
                    <div><img className="iconRecommendation" src={open_windows}/></div>
                    <div className="recommendation">Ventilate the house</div>
                    </div>
                </div>
            </>
        );
    }

    if (statusAir === 3) {
        return (
            <>
                {' '}
                <img className="iconStatus" src={good}/>
                <p className="statusName" style={{color: '#7EBD18'}}>Moderate</p>
                <div>
                    <div><img className="iconRecommendation" src={trees}/></div>
                    <div className="recommendation">Walk outdoors</div>
                    <div><img className="iconRecommendation" src={open_windows}/></div>
                    <div className="recommendation">Ventilate the house</div>
                </div>
            </>
        );
    }

    if (statusAir === 4) {
        return (
            <>
                {' '}
                <img className="iconStatus" src={poor}/>
                <p className="statusName" style={{color: '#BD9918'}}>Poor</p>
                <div>
                    <div><img className="iconRecommendation" src={mask}/></div>
                    <div className="recommendation">Wear a mask</div>
                    <div><img className="iconRecommendation" src={window}/></div>
                    <div className="recommendation">Close windows</div>
                    <div><img className="iconRecommendation" src={air_filter}/></div>
                    <div className="recommendation">Use an air purifier</div>
                </div>
            </>
        );
    }

    if (statusAir === 5) {
        return (
            <>
        {' '}
            <img className="iconStatus" src={poor}/>
            <p className="statusName" style={{color: '#BD3518'}}>Very Poor</p>
            <div>
                <div><img className="iconRecommendation" src={mask}/></div>
                <div className="recommendation">Wear a mask</div>
                <div><img className="iconRecommendation" src={window}/></div>
                <div className="recommendation">Close windows</div>
                <div><img className="iconRecommendation" src={air_filter}/></div>
                <div className="recommendation">Use an air purifier</div>
            </div>
            </>
        );
    }

    return (
        {statusAir}
    );
}

export default DescriptionStatusAir;
