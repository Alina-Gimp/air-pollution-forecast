import React, {useState} from 'react';
import './styles/AirQualityStyle.css';
import useGetCoordinatesByAddressName from "./hook/useGetCoordinatesByAddressName";
import Header from "./component/header/Header";
import CitySearch from "./component/city-search/CitySearch";
import AirQualityForecast from "./component/air-quality-forecast/AirQualityForecast";
import Faq from "./component/faq/Faq";
import Footer from "./component/footer/Footer";
import {
  mapLocationApiToCoordinates,
  mapLocationApiToSuggestedCities,
  mapLocationApiToSuggestedCity
} from "./mapper/GeolocationApiMapper";

function AirQuality() {
  const [city, setCity] = useState("");
  const [isCityConfirmed, setCityConfirmed] = useState(false);

  const geolocationApiResponse = useGetCoordinatesByAddressName(city);
  const displayAddress = isCityConfirmed ? mapLocationApiToSuggestedCity(geolocationApiResponse) : "";
  const coordinates = mapLocationApiToCoordinates(geolocationApiResponse);
  const suggestions = mapLocationApiToSuggestedCities(geolocationApiResponse);

  return (
    <div className="main">
      <div className="top">
      <Header />
      <CitySearch
        saveCity={setCity}
        confirmCity={setCityConfirmed}
        datalist={suggestions}
      />
      <AirQualityForecast
        displayAddress={displayAddress}
        coordinates={coordinates}
        isCityConfirmed={isCityConfirmed}
      />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default AirQuality;
