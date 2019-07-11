import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoogleMapContainer from "./googlemaps"
// import { getAccessToken, getListingById } from "./domain"
import GenerateToken from './domain'
// import DisplayMarkers from "./displayMarkers"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Link to="/map/">Map</Link>
        <Link to="/domain/">Map</Link>
        {/* <button onClick={(e) => {new GenerateToken(e)}} />  */}

        </header>
        <Route path="/map/" component={GoogleMapContainer} />
        {/* <button onClick={() => getAccessToken()} /> */}
        {/* <button onClick={() => new GenerateToken} /> */}

        {/* <button onClick={() => getListingById()} /> */}
        <div>
            </div>
        <Route path="/domain/" component  ={GenerateToken}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
