import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';
import LoggedInContext  from './user/userContext'
import { Button, HeroHeader, Navbar, NavItem, NavbarBrand, NavbarStart, NavbarEnd, Icon } from 'bloomer'
export default class Header extends Component{
    constructor(props){
        super(props)
this.state = {
    path: this.props
}    }


componentDidMount(){
    console.log(this.props)
}
    render(){
        this.context = this.context
        let activeLogButton
        let profileButton
        let signupButton
        let investmentSearchButton
        let isLoggedIn = this.context.isLoggedIn
        

        
        let logoutButton = 
                <NavItem>
                    <Button isSize='large' isColor='danger'>
                        <LoggedInContext.Consumer>
                        {({isLoggedIn, setLoggedInState}) => isLoggedIn ? 
                            <Link to="/logout/" onClick={() => setLoggedInState()}>Logout</Link>: <Redirect to="/" />
                        }</LoggedInContext.Consumer>
                    </Button>                 
                </NavItem> 
        
        if (!isLoggedIn) {
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
                    <Button isSize='large' isColor='warning'>
                        <Link to="/domain/">Profity Manager</Link>
                    </Button>
                </NavItem>
        }

        return(
            <HeroHeader >
                <Navbar className='is-primary is-fixed-top' isDisplay='flex' style={{justifyContent: 'space-between', background: 'white'}}>
                    <NavbarStart>
                    {investmentSearchButton}
                    </NavbarStart>
                        {profileButton}
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
