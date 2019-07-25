import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Field, Label, Control, Input, Icon, Help, Button} from 'bloomer'
var jwtDecode = require('jwt-decode');
const uri = "https://magnanimous-goat-5432.herokuapp.com";


export default class UserRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password: "",
            isRegistering: true

        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    onSubmit = (event) => {
        
        event.preventDefault();
        fetch(`${uri}/api/register`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.setState({isRegistering: false})
            } else {
               const error = res.json();
              throw error;
            }
          })
          .catch(err => {
            alert('Error creating account try again');
          });    
        }

    render(){
      if (this.state.isRegistering){
        return(
          <Container>
          <Field> 
              <Label>Email</Label>
              <Control>
                  <Input type="email" name="email" placeholder="Email" onChange={this.handleChange} required/>
              </Control>
              </Field>

              <Field> 
              <Label>Password</Label>
              <Control>
                  <Input type="password" name='password' placeholder="Password" onChange={this.handleChange} required/>
                  </Control>
          </Field>
          <Field>
              <Control>
                  <Button onClick={this.onSubmit} isColor='primary'>
                      Create Account
                  </Button>
              </Control>
          </Field>
      </Container>

        )
      }
      return (<Redirect to={'/login'} />)
    }
}