import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import scooterImage from './scooterImage.png'; // update with actual path to your image

const Home = () => {
  useEffect(() => {
    // Initialize any additional animations or effects here
  }, []);

  return (
    <div className="home-container bg-gradient-to-r flex flex-col items-center justify-center h-screen relative p-4">
      <div className="background-section flex-1 flex flex-col items-center justify-center relative">
        <div className="map-markers">
          <img 
            src={`${process.env.PUBLIC_URL}/mapMarkerIcon.svg`} 
            alt="Map Marker" 
            className="map-marker"
          />
        </div>
        <div className="content-section flex-1 flex flex-col items-center justify-center relative">
          <img src={scooterImage} alt="Scooter Delivery" className="scooter-image" />
          <div className="text-section text-center">
            <h1 className="big-text">Empowering</h1>
            <h1 className="big-text">Campus</h1>
            <h1 className="big-text">Mobility</h1>
            <motion.button
              onClick={() => window.location.href = '/signin'}
              className="bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg hover:bg-blue-100 transition-transform transform hover:scale-105 mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Sign In
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
};

export default Home;



