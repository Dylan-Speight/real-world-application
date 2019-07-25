import React, {Component} from 'react'
import LoggedInContext  from './userContext'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
const uri = "https://magnanimous-goat-5432.herokuapp.com";
import { Container, Field, Label, Control, Input, Help, Button} from 'bloomer'

export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            incorrect: false,
            passwordField: null,
            emailField: null,
            loginRes: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    onSubmit = (event) => {
        this.setState({passwordField: null, emailField: null, incorrect: null, loginRes: null})
        const { email, password } = this.state
        event.preventDefault();
        fetch(`${uri}/api/authenticate`, {
            method: 'POST',
            body: JSON.stringify(
                {email, password}
            ),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(async res => {
            const response = await res.json()
            cookie.save("token", await response.token, {path: "/"})
            if (res.status === 200) {
                cookie.save("isLoggedIn", "true", {path: "/"})
                cookie.save("email", `${this.state.email}`, {path: "/"})
                this.context.setLoggedInState({isLoggedIn: true, email: this.state.email, token: response.token})
                this.props.history.push('/domain');
            } 
            else {
                if (res.status === 401) {
                    if (response.error.password) {
                        this.setState({passwordField: 'danger'})
                        this.setState({incorrect: 'password'});
                        this.setState({loginRes: response.error.password});

                    }
                    if (response.error.email) {
                        this.setState({emailField: 'danger'})
                        this.setState({incorrect: 'email'});
                        this.setState({loginRes: response.error.email});
                    }
                } else {
                const error = new Error(res.error);
                throw error;
                }
            }
            console.log(this.state)
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
        });    
    }
    
  
    render(){
        this.context = this.context
        let invalidCredentials = {
            email: null, password: null}
        
        if (this.state.incorrect === 'email') {
            invalidCredentials.email = <Help isColor='danger'>{this.state.loginRes}</Help>

        }

        if (this.state.incorrect === 'password') {
            invalidCredentials.password = <Help isColor='danger'>{this.state.loginRes}</Help>
        }

    
        return(
            <Container className='customForm'>
                <Field> 
                    <Label>Email</Label>
                    <Control>
                        <Input isColor={this.state.emailField} type="email" name="email" placeholder="Email" onChange={this.handleChange} required/>
                    </Control>
                </Field>
                {invalidCredentials.email}
                <Field> 
                    <Label>Password</Label>
                    <Control>
                        <Input isColor={this.state.passwordField} type="password" name='password' placeholder="Password" onChange={this.handleChange} required/>
                    </Control>
                { invalidCredentials.password}
                </Field>
                <Field isDisplay='flex' style={{'justifyContent': 'space-around'}}>
                    <Control>
                        <Button onClick={this.onSubmit} isColor='primary'>
                            Login
                        </Button>
                    </Control>
                </Field>
            </Container>

        )
    }
}

UserLogin.contextType = LoggedInContext
