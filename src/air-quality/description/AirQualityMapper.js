import AirQualityDescriptionEnum from "./AirQualityDescriptionEnum";

const mapQualityNumberToDescriptionElement = (number) => {
    switch(number) {
        case 1: return AirQualityDescriptionEnum.GOOD;
        case 2: return AirQualityDescriptionEnum.FAIR;
        case 3: return AirQualityDescriptionEnum.MODERATE;
        case 4: return AirQualityDescriptionEnum.POOR;
        case 5: return AirQualityDescriptionEnum.VERY_POOR;
    }
}

export {
    mapQualityNumberToDescriptionElement
}