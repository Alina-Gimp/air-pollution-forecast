import goodAir from '../IconsAir/goodAir.png';
import poorAir from '../IconsAir/poorAir.png';
import trees from '../IconsAir/trees.png';
import openWindows from '../IconsAir/openWindows.png';
import mask from '../IconsAir/mask.png';
import window from '../IconsAir/window.png';
import airFilter from '../IconsAir/airFilter.png';

const AirQualityDescriptionEnum = {
  GOOD: {
    name: 'Good',
    icon: goodAir,
    color: '#3BD614',
    alt: 'icon: fresh air',
    hint: 'Fresh air',
    recommendations: [
      {
        icon: trees,
        alt: 'icon: trees',
        text: 'Walk outdoors',
      },
      {
        icon: openWindows,
        alt: 'icon: open window',
        text: 'Ventilate the house',
      },
    ],
  },
  FAIR: {
    name: 'Fair',
    icon: goodAir,
    color: '#4DAB2C',
    alt: 'icon: fresh air',
    hint: 'Sensitive people may need a mask',
    recommendations: [
      {
        icon: trees,
        alt: 'icon: trees',
        text: 'Walk outdoors',
      },
      {
        icon: openWindows,
        alt: 'icon: open window',
        text: 'Ventilate the house',
      },
    ],
  },

  MODERATE: {
    name: 'Moderate',
    icon: goodAir,
    color: '#7EBD18',
    alt: 'icon: fresh air',
    hint: 'Sensitive people may need a mask',
    recommendations: [
      {
        icon: trees,
        alt: 'icon: trees',
        text: 'Walk outdoors',
      },
      {
        icon: openWindows,
        alt: 'icon: open window',
        text: 'Ventilate the house',
      },
    ],
  },

  POOR: {
    name: 'Poor',
    icon: poorAir,
    color: '#BD9918',
    alt: 'icon: poor air',
    hint: 'The air is unhealthy',
    recommendations: [
      {
        icon: mask,
        alt: 'icon: mask',
        text: 'Wear a mask',
      },
      {
        icon: window,
        alt: 'icon: close window',
        text: 'Close windows',
      },
      {
        icon: airFilter,
        alt: 'icon: air filter',
        text: 'Use an air purifier',
      },
    ],
  },

  VERY_POOR: {
    name: 'Very Poor',
    icon: poorAir,
    color: '#BD3518',
    alt: 'icon: poor air',
    hint: 'Air is dangerous for health',
    recommendations: [
      {
        icon: mask,
        alt: 'icon: mask',
        text: 'Wear a mask',
      },
      {
        icon: window,
        alt: 'icon: close window',
        text: 'Close windows',
      },
      {
        icon: airFilter,
        alt: 'icon: air filter',
        text: 'Use an air purifier',
      },
    ],
  },

};

export default AirQualityDescriptionEnum;
