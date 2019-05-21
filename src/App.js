import React from 'react';
import './App.css';

function App() {
  return (
    <div className="root">
      <div className="logo">
        <h1>Movie Search Engine</h1>
      </div>
      <div className="search-form">
        <input type="text" placeholder="Enter any movie name" />
        <input type="button" value="Search" />
      </div>
    </div>
  );
}

export default App;
