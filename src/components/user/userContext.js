import React from 'react'
import cookie from 'react-cookies';

export function checkCookie() {
    if ((cookie.load('isLoggedIn') === "true" )  && (cookie.load('token') !== "")){
        return { isLoggedIn: true, token: cookie.load('token')}
    }
}
export const LoggedInContext = React.createContext({})

export default LoggedInContext