import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';
import LoggedInContext  from './user/userContext'
import { Button, HeroHeader, Navbar, NavItem, NavbarBrand, NavbarStart, NavbarEnd, Icon } from 'bloomer'

export default class Header extends Component{
    render(){
        this.context = this.context
        let activeLogButton
        let profileButton
        let signupButton
        let investmentSearchButton
        let isLoggedIn = this.context.isLoggedIn

        let loginButton =   
            <Button isSize='large' isColor='primary'>
                <LoggedInContext.Consumer>
                {({isLoggedIn, setLoggedInState}) => !isLoggedIn ? 
                    <Link to="/login/" onClick={() => setLoggedInState()}>Login</Link>: <Redirect to="/domain" />}
                </LoggedInContext.Consumer>
            </Button> 
        
        let logoutButton = 
                <NavItem>
                    <Button isSize='large' isColor='primary'>
                        <LoggedInContext.Consumer>
                        {({isLoggedIn, setLoggedInState}) => isLoggedIn ? 
                            <Link to="/logout/" onClick={() => setLoggedInState()}>Logout</Link>: <Redirect to="/" />
                        }</LoggedInContext.Consumer>
                    </Button>                 
                </NavItem> 
        
        if (!isLoggedIn) {
            activeLogButton = loginButton
            signupButton = 
            <NavItem>
                <Button isSize='large' isColor='primary'>
                    <Link to="/register">Sign Up</Link>
                </Button>
            </NavItem>
        }
        else {
            activeLogButton = logoutButton
            profileButton = 
                <NavItem>
                    <Button isSize='large' isColor='primary'>
                        <LoggedInContext.Consumer>
                        {({email}) => 

                            <Link to="/profile/" value={email}>Profile</Link>
                        }
                        </LoggedInContext.Consumer>
                    </Button>
                </NavItem>
            investmentSearchButton =
                <NavItem>
                    <Button isSize='large' isColor='primary'>
                        <Link to="/domain/">Profity Manager</Link>
                    </Button>
                </NavItem>
        }
        
        return(
            <HeroHeader >
                <Navbar className='is-primary'>
                    <NavbarBrand>
                        <Icon className="fa fa-github" />
                    </NavbarBrand>
                    <NavbarStart>
                        <NavItem>
                            <Button isSize='large' isColor='primary'>
                                <Link to="/">Home</Link>
                            </Button>
                        </NavItem>
                        {investmentSearchButton}
                        {profileButton}
                    </NavbarStart>
                    <NavbarEnd>
                        {signupButton}
                        {activeLogButton}
                    </NavbarEnd>
                </Navbar>
            </HeroHeader>
        );
    } 
}
Header.contextType = LoggedInContext
