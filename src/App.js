// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Camera from './ScanPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user session or token here
    // For example: 
    // const token = localStorage.getItem('token');
    // if (token) {
    //   setUser({ id: 1, name: 'User' }); // Replace with actual user data
    // }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/signin"
          element={
            <div className="#ffff flex items-center justify-center h-screen">
              <SignIn setUser={setUser} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;





