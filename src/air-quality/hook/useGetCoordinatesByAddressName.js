import React, {useEffect, useState} from 'react';
import KEY from '../KEY';

function useGetCoordinatesByAddressName(address) {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (!!address) {
      fetch('https://api.opencagedata.com/geocode/v1/json?key=' + KEY.COORDINATES + "&q=" + address)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;
          const coordinatesArray = results.map(result => ({
            coordinates: result.geometry,
            name: result.formatted
          }));
          setCoordinates(coordinatesArray);
        });
    }
  }, [address]);

  return coordinates;
}

export default useGetCoordinatesByAddressName;
