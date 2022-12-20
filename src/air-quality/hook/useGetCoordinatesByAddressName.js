import React, {useEffect, useState} from 'react';
import ApiKey from '../../settings/ApiKey';

function useGetCoordinatesByAddressName(address) {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    if (!!address && address.length > 2) {
      fetch('https://api.opencagedata.com/geocode/v1/json?key=' + ApiKey.COORDINATES + "&q=" + address + "&language=en")
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
  }, [address.length]);

  return coordinates;
}

export default useGetCoordinatesByAddressName;
