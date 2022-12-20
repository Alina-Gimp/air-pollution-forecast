import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import AirQuality from "../air-quality/AirQuality";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/AirQuality">
        <AirQuality/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;