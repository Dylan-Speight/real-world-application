import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import LoggedInContext from './user/userContext'
const uri = "https://magnanimous-goat-5432.herokuapp.com";

export default function authCheck(ComponentToProtect, token) {
  return class Auth extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };

    }
    componentDidMount() {
      if (!token){
        token = cookie.load('token')

      }
      fetch(`${uri}/checkToken`, {
        headers: {
          Authorization: token}
        })
        .then(async res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}
authCheck.contextType = LoggedInContext
