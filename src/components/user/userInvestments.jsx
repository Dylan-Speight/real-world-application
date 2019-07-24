import React,{ Component } from 'react'
import LoggedInContext from './userContext'

export default function findUserInvestment(email) {
    console.log(email)
    console.log("INVEST")
    fetch('http://localhost:4000/api/findinvestment', {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: email

        }
    }).then(async res => 
        console.log(res))

}

export function saveUserInvestment(email, investment) {
    console.log(email)
    console.log("INVEST")
    fetch('http://localhost:4000/api/saveinvestment', {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: email

        },
        body: investment
    }).then(async res => 
        console.log(res))

}