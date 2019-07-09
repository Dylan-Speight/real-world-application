import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";


export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/"><button>Home</button></Link>
          <Link to="/nav1"><button>Nav1</button></Link>
          <Link to="/nav2"><button>Nav2</button></Link>
          <Link to="/nav3"><button>Nav3</button></Link>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/nav1" component={Nav1} />
          <Route exact path="/nav2" render={props => <Nav2 />} />
          <Route exact path="/nav3" render={props => <Nav3 />} />
        </div>
      </BrowserRouter>
    </div>
  );
}
