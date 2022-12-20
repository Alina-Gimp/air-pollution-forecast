import AirQualityStatusEnum from '../enum/AirQualityStatusEnum';

const mapQualityNumberToDescriptionElement = (number) => {
  switch (number) {
    case 1: return AirQualityStatusEnum.GOOD;
    case 2: return AirQualityStatusEnum.FAIR;
    case 3: return AirQualityStatusEnum.MODERATE;
    case 4: return AirQualityStatusEnum.POOR;
    case 5: return AirQualityStatusEnum.VERY_POOR;
  }
};

export {
  mapQualityNumberToDescriptionElement,
};
