import React from 'react'
import cookie from 'react-cookies';

export function checkCookie() {
    if ((cookie.load('isLoggedIn') === "true" )  && (cookie.load('token') !== "") && (cookie.load('email') !== "")){
        return { isLoggedIn: true, token: cookie.load('token'), email: cookie.load('email')}
    }
}
export const LoggedInContext = React.createContext({})

export default LoggedInContext