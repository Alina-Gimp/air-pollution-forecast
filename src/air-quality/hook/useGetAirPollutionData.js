import { useEffect, useState } from 'react';
import KEY from '../KEY';

function useGetAirPollutionData(address = {}, isCityConfirmed) {
  const [forecastAirPollutions, setForecastAirPollutions] = useState([]);

  const {
    lat = 0,
    lng = 0,
  } = address;

  useEffect(() => {
    if (isCityConfirmed && lat !== 0 && lng !== 0) {
      fetch("https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + KEY.POLLUTION)
        .then((response) => response.json())
        .then((data) => {
          setForecastAirPollutions(data.list);
        });
    }
  }, [lat, lng, isCityConfirmed]);

  return forecastAirPollutions;
}

export default useGetAirPollutionData;
