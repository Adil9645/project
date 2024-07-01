import React from 'react';
import { useState } from 'react';
import './Location.css';
import { AiOutlineClose, AiOutlineEnvironment } from 'react-icons/ai';

const Location = () => {
  const [location, setLocation] = useState(null);

  const useCurrentLocation = () => {
    alert('Use Current Location feature will be implemented.');
  };

  const enterNewAddress = () => {
    alert('Enter New Address feature will be implemented.');
  };

  return (
    <div className="container">
      <button className="closeButton" onClick={() => alert('Close button clicked')}>
        <AiOutlineClose size={24} />
      </button>
      <div className="mapPlaceholder">
        <AiOutlineEnvironment size={64} color="#32CD32" />
      </div>
      <p className="title">We need to know your location in order to suggest nearby Rides</p>
      <button className="button" onClick={useCurrentLocation}>
        Use Current Location
      </button>
      <button className="button" onClick={enterNewAddress}>
        Enter a new address
      </button>
    </div>
  );
};

export default Location;

