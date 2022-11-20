import React from 'react';
import './AirQualityStyle.css';
import good from '../air-quality/IconsAir/good.png';
import poor from '../air-quality/IconsAir/poor.png';
import very_poor from '../air-quality/IconsAir/very_poor.png';

function DescriptionStatusAir({statusAir}) {
    if (statusAir === 1) {
        return <> <p style={{color: '#3BD614'}}>Good</p>
        <img src={good}/> </>
    }

    if (statusAir === 2) {
        return <> <p style={{color: '#4DAB2C'}}>Fair</p>
        <img src={good}/> </>
    }

    if (statusAir === 3) {
        return <> <p style={{color: '#7EBD18'}}>Moderate</p>
        <img src={good}/> </>
    }

    if (statusAir === 4) {
        return <> <p style={{color: '#BD9918'}}>Poor</p>
        <img src={poor}/> </>
    }

    if (statusAir === 5) {
        return <> <p style={{color: '#BD3518'}}>Very Poor</p>
        <img src={very_poor}/> </>
    }

    return (
                {statusAir}
    );
}

export default DescriptionStatusAir;
