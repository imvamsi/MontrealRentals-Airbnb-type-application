import React from 'react';
import NavBar from './Components/NavBar';
import RentalList from './Components/Rentals/RentalList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <RentalList />
      </div>
    </div>
  );
}

export default App;
