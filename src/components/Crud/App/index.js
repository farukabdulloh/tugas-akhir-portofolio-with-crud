import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';


const Crud = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {/* {isAuthenticated ? ( */}
      <Dashboard setIsAuthenticated={setIsAuthenticated} />
      {/* ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )} */}
    </>
  );
};

export default Crud;
