const mapAirQualityApiToDailyAverageSummary = (apiSource) => {
  const result = new Map();
  apiSource.forEach((forecast) => {
    const day = new Date(forecast.dt * 1000).toLocaleDateString('en-us', { weekday: 'long' });

    if (!result.has(day)) {
      result.set(day, []);
    }

    result.get(day).push(forecast);
  });

  const forShow = [];
  result.forEach((value, key) => {
    const oneDaySum = value.reduce((accumulator, element) => {
      accumulator.co += element.components.co;
      accumulator.no += element.components.no;
      accumulator.no2 += element.components.no2;
      accumulator.o3 += element.components.o3;
      accumulator.so2 += element.components.so2;
      accumulator.pm2_5 += element.components.pm2_5;
      accumulator.pm10 += element.components.pm10;
      accumulator.nh3 += element.components.nh3;
      accumulator.aqi += element.main.aqi;

      return accumulator;
    }, {
      co: 0,
      no: 0,
      no2: 0,
      o3: 0,
      so2: 0,
      pm2_5: 0,
      pm10: 0,
      nh3: 0,
      aqi: 0,
    });

    oneDaySum.co = Number(oneDaySum.co / value.length).toFixed(1);
    oneDaySum.no = Number(oneDaySum.no / value.length).toFixed(2);
    oneDaySum.no2 = Number(oneDaySum.no2 / value.length).toFixed(1);
    oneDaySum.o3 = Number(oneDaySum.o3 / value.length).toFixed(1);
    oneDaySum.so2 = Number(oneDaySum.so2 / value.length).toFixed(1);
    oneDaySum.pm2_5 = Number(oneDaySum.pm2_5 / value.length).toFixed(1);
    oneDaySum.pm10 = Number(oneDaySum.pm10 / value.length).toFixed(1);
    oneDaySum.nh3 = Number(oneDaySum.nh3 / value.length).toFixed(1);
    oneDaySum.aqi = Number(oneDaySum.aqi / value.length);

    forShow.push({ date: key, pollution: oneDaySum });
  });

  return forShow;
}

export {
  mapAirQualityApiToDailyAverageSummary,
}