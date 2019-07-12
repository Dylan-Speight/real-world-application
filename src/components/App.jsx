import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoogleMapContainer from "./googlemaps"
import DomainPage from './domainPage'
// import DisplayMarkers from "./displayMarkers"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Link to="/map/">Google Maps API Testing</Link>
        <Link to="/Domain/">Domain API Testing</Link>

        {/* <button onClick={(e) => {new GenerateToken(e)}} />  */}
        </header>
        <Route path="/map/" component={GoogleMapContainer} />
        <Route path="/domain/" component={DomainPage}/>

        {/* <button onClick={() => getAccessToken()} /> */}
        {/* <button onClick={() => new GenerateToken} /> */}

        {/* <button onClick={() => getListingById()} /> */}
        <div>
            </div>
        {/* <Route path="/domain/" component={GenerateToken}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;