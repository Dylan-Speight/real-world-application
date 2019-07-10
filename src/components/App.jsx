import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoogleMapContainer from "./googlemaps"
import GetAccessToken from "./domain"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Link to="/map/">Map</Link>
        <Link to="/domain/">Map</Link>

        </header>
        <Route path="/map/" component={GoogleMapContainer} />
  <Route path="/domain/" render={() => <p>{GetAccessToken()}</p>} />

      </BrowserRouter>
    </div>
  );
}

export default App;
