import React from 'react';
import co from "./IconsAir/co.png";
import no from "./IconsAir/no.png";
import no2 from "./IconsAir/no2.png";
import o3 from "./IconsAir/o3.png";
import so2 from "./IconsAir/so2.png";
import pm2_5 from "./IconsAir/pm2_5.png";
import pm10 from "./IconsAir/pm10.png";
import nh3 from "./IconsAir/nh3.png";

function Pollution({ index, pollution }) {
    return (
      <>
        <div className="components">
            <div className="pollutions">Pollutions, μg/m3:</div>
            <div className="components_1_2">
            <div className="components_1">
                <div className="component">
                    <div><img className="iconPollution" src={co} alt="Carbon monoxide(CO)"
                              title="Carbon monoxide (CO)"/></div>
                    <div className="concentration" key={index}>{pollution.co}</div>
                </div>
                <div className="component">
                    <div><img className="iconPollution" src={no} alt="Nitrogen monoxide(NO)"
                              title="Nitrogen monoxide (NO)"/></div>
                    <div className="concentration" key={index}>{pollution.no}</div>
                </div>
                <div className="component">
                    <div><img className="iconPollution" src={no2} alt="Nitrogen dioxide(NO2)"
                              title="Nitrogen dioxide (NO2)"/></div>
                    <div className="concentration" key={index}>{pollution.no2}</div>
                </div>
                <div className="component">
                    <div><img className="iconPollution" src={o3} alt="Ozone"
                              title="Ozone (O3)"/></div>
                    <div className="concentration" key={index}>{pollution.o3}</div>
                </div>
            </div>
            <div className="components_2">
                <div className="component">
                    <div><img className="iconPollution" src={so2} alt="Sulphur dioxide(SO2)"
                              title="Sulphur dioxide (SO2)"/></div>
                    <div className="concentration" key={index}>{pollution.so2}</div>
                </div>
                <div className="component">
                    <div>
                        <img
                            className="iconPollution"
                            src={pm2_5}
                            alt="Fine particles matter(PM2_5)"
                            title="Fine particles matter (PM2.5)"
                        />
                    </div>
                    <div className="concentration" key={index}>{pollution.pm2_5}</div>
                </div>
                <div className="component">
                    <div>
                        <img
                            className="iconPollution"
                            src={pm10}
                            alt="Coarse particulate matter"
                            title="Coarse particulate matter (PM10)"
                        />
                    </div>
                    <div className="concentration" key={index}>{pollution.pm10}</div>
                </div>
                <div className="component">
                    <div><img className="iconPollution" src={nh3} alt="Ammonia(NH3)"
                              title="Ammonia (NH3)"/></div>
                    <div className="concentration" key={index}>{pollution.nh3}</div>
                </div>
            </div>
            </div>
        </div>
      </>
    )
}

export default Pollution;