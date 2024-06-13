import React, { useState } from 'react';

function Form() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('green');

  const handleChange = (e) => {
    setFahrenheit(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(fahrenheit) || fahrenheit === '') {
      setResult('Please enter a valid number');
      return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    setResult(`${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`);
  };

  const toggleBgColor = () => {
    setBgColor(prevColor => (prevColor === 'green' ? 'blue' : 'green'));
  };

  return (
    <div>
      <h3>Pengubah suhu</h3>
      <label htmlFor="fahrenheit">Fahrenheit:</label>
      <input type="number" id="fahrenheit" name="fahrenheit" value={fahrenheit} onChange={handleChange} /><br />
      <button onClick={handleClick}>Uji</button>
      <p id="hasil">{result}</p>
      <p id="warna" style={{ backgroundColor: bgColor }} onClick={toggleBgColor}>ubah warna</p>
    </div>
  );
}

export default Form;
