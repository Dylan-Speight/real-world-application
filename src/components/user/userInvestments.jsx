import React,{ Component } from 'react'
import LoggedInContext from './userContext'
const uri = "https://magnanimous-goat-5432.herokuapp.com/";


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

// return <div> invest </div>

    //     // const response = await res.json()
    //     // cookie.save("token", await response.token, {path: "/"})
    //     if (res.status === 200) {
    //         // cookie.save("isLoggedIn", "true", {path: "/"})
    //         // this.context.setLoggedInState(true)
    //         // this.props.history.push('/domain');
    //     } else {
    //         const error = new Error(res.error)    ;
    //         throw error;
    //     }
    // })
    // .catch(err => {
    //     console.error(err);
    //     alert('Error logging in please try again');
    // });   