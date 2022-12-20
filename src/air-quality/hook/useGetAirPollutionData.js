import { useEffect, useState } from 'react';
import ApiKey from '../../settings/ApiKey';

function useGetAirPollutionData(coordinates = {}, isCityConfirmed) {
  const [forecastAirPollutions, setForecastAirPollutions] = useState([]);

  const {
    lat = 0,
    lng = 0,
  } = coordinates;

  useEffect(() => {
    if (isCityConfirmed && lat !== 0 && lng !== 0) {
      fetch("https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + lat + "&lon=" + lng + "&appid=" + ApiKey.POLLUTION)
        .then((response) => response.json())
        .then((data) => {
          setForecastAirPollutions(data.list);
        });
    }
  }, [lat, lng, isCityConfirmed]);

  return forecastAirPollutions;
}

export default useGetAirPollutionData;
