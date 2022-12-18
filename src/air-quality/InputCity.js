import React, { useState } from 'react';

function InputCity({saveCity}) {
  const [currentCity, setCurrentCity] = useState('');

  function handleChange(event) {
    setCurrentCity(event.target.value);
  }


  function handleButtonClick() {
    if (currentCity.trim() === '') return;
    saveCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') handleButtonClick();
  }

  return (
    <div className="buttonAndInput">
      <div className="inputDiv">
        <input
          className="input"
          placeholder="Enter city"
          value={currentCity}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          title="Only latin letters"
        />
      </div>
      <div className="buttonDiv">
        <button className="button" onClick={handleButtonClick}>Search</button>
      </div>
    </div>

  );
}
export default InputCity;
