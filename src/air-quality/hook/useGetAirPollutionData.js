import { useEffect, useState } from 'react';

function useGetAirPollutionData() {
  const [forecastAirPollutions, setForecastAirPollutions] = useState([]);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=46.056946&lon=14.505751&appid=765296cc4d0787c4b6b8a0004fc4fcc0')
      .then((response) => response.json())
      .then((data) => {
        setForecastAirPollutions(data.list);
      });
  }, [forecastAirPollutions.length]);
  return forecastAirPollutions;
}

export default useGetAirPollutionData;
