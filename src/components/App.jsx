import React, { Component } from 'react';
import '../App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DomainPage from './domainPage';



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
=======
import { BrowserRouter, Route } from 'react-router-dom';
import DomainPage from './domain/domainPage';
import UserLogin from './user/userLogin';
import authCheck from './authCheck';
import UserRegister from './user/userRegister';
import cookie from 'react-cookies';
import Logout from './user/userLogout'
import Header from './header'
import UserProfile from './user/userProfile'
import LoggedInContext from './user/userContext'
import checkCookie from './user/checkCookie'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false, email: "", token: ""
    }
  }

  async componentDidMount() {
      const response = await checkCookie()
      this.setState(response)
  }

  setLoggedInState = ((value)  => { this.setState(value); console.log(this.state)})
  render() {
    this.context = this.context
    return (
      <div className="App">
        <BrowserRouter>
        <LoggedInContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          token: this.state.token, 
          email: this.state.email, 
          setLoggedInState: this.setLoggedInState}}>

          <Header />
          <Route path="/domain/" component={authCheck(DomainPage, this.state.token)}/>
          <Route path="/login" component={UserLogin}/>
          <Route path="/register" component={UserRegister}/>
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={UserProfile} />
          </LoggedInContext.Provider>

        </BrowserRouter>

      </div>
    );
  }
>>>>>>> db916f17359aff8ace3f95aaceee0b901eea7a7e
}
App.contextType = LoggedInContext


<<<<<<< HEAD
export default App;
=======
>>>>>>> db916f17359aff8ace3f95aaceee0b901eea7a7e
