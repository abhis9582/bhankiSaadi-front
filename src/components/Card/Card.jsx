// Card.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css'

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.5:45455/WeatherForecast');
        setItems(response.data); // Assuming data is an array of items
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="card-container border border-2 d-flex justify-content-between align-items-center g-2  text-dark  m-3">
      {items.map((item) => (
        <div key={item.item} className="card p-5 d-flex ">
          <p > <span >Date:</span> {item.date}</p>
          <p > <span >Summary:</span> {item.summary}</p>
          <p > <span >TemperatureC:</span> {item.temperatureC}</p>
          <p > <span >TemperatureF:</span> {item.temperatureF}</p>
          {/* Add more fields based on your data structure */}
        </div>
      ))}
    </div>
  );
};

export default Card;
