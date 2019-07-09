import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoogleMapContainer from "./googlemaps"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Link to="/map/">Map</Link>
        </header>
        <Route path="/map/" component={GoogleMapContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
