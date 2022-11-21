import React from 'react';
import './AirQualityStyle.css';


function DescriptionStatusAir({statusAir}) {
    if (statusAir === 1) {
        return <> <p style={{color: '#3BD614'}}>Good</p>
        </>
    }

    if (statusAir === 2) {
        return <> <p style={{color: '#4DAB2C'}}>Fair</p>
         </>
    }

    if (statusAir === 3) {
        return <> <p style={{color: '#7EBD18'}}>Moderate</p>
        </>
    }

    if (statusAir === 4) {
        return <> <p style={{color: '#BD9918'}}>Poor</p>
         </>
    }

    if (statusAir === 5) {
        return <> <p style={{color: '#BD3518'}}>Very Poor</p>
     </>
    }

    return (
                {statusAir}
    );
}

export default DescriptionStatusAir;
