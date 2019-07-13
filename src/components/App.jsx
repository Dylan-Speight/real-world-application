import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DomainPage from './domainPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Link to="/">Home Page</Link>
        <Link to="/Domain/">API Testing</Link>
        </header>
        <Route path="/domain/" component={DomainPage}/>

        <div>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;