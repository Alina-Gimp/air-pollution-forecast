import React, {useState} from 'react';

function InputCity({saveCity, confirmCity, datalist}) {
  const [currentCity, setCurrentCity] = useState('');

  function handleChange(event) {
    setCurrentCity(event.target.value);
    saveCity(event.target.value);
    confirmCity(false);
  }

  function handleButtonClick() {
    if (currentCity.trim() === '') return;
    confirmCity(true);
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
          list="data"
        />
        <datalist id="data">
          {datalist.map((item, index) =>
            <option key={index} value={item}/>
          )}
        </datalist>
      </div>
      <div className="buttonDiv">
        <button className="button" onClick={handleButtonClick}>Search</button>
      </div>
    </div>

  );
}

export default InputCity;
