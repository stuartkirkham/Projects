import React, { useState, useEffect } from 'react';
import Weather from './components/weather'; // Assuming you have a Weather component


function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (lat !== null && long !== null) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeatherData();
    }
  }, [lat, long]);

  return (
    <div className="App">
      {data && (
        <Weather weatherData={data} />
      )}
    </div>
  );
}

export default App;