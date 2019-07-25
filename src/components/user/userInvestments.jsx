import React,{ Component } from 'react'
import LoggedInContext from './userContext'
const uri = "https://magnanimous-goat-5432.herokuapp.com";

export default function findUserInvestment(email) {
    console.log(email)
    console.log("INVEST")
    fetch(`${uri}/api/findinvestment`, {
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
    fetch(`${uri}/api/saveinvestment`, {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
            Authorization: email

        },
        body: investment
    }).then(async res => 
        console.log(res))

}