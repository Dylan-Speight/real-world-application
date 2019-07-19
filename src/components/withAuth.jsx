import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        token: cookie.load("token")
      };
    }
    componentDidMount() {
      fetch('http://localhost:4000/checkToken', {
        headers: {
          Authorization: this.state.token}
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
        console.log("redirected")
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