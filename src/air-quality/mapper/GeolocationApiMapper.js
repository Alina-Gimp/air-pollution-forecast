const mapLocationApiToSuggestedCity = (apiSource) => {
  return !!apiSource && apiSource.length > 0 && apiSource[0] && apiSource[0].name || "";
}

const mapLocationApiToCoordinates = (apiSource) => {
  return !!apiSource && apiSource.length > 0 && apiSource[0] && apiSource[0].coordinates || {};
}

const mapLocationApiToSuggestedCities = (apiSource) => {
  return !!apiSource && apiSource.map(address => address.name) || [];
}

export {
  mapLocationApiToSuggestedCity,
  mapLocationApiToCoordinates,
  mapLocationApiToSuggestedCities,
}