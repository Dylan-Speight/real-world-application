import React,{ Component } from 'react'
const uri = "https://magnanimous-goat-5432.herokuapp.com";

export default function findUserInvestment(email) {
    return new Promise((resolve, reject) => {
        fetch(`${uri}/api/findinvestment`, {
            method: "POST",
            headers: {
                Authorization: email 
            }
        })
        .then(async res => {
            if (await res.status === 200) {
                resolve(res.json())
            }
            else {
                reject("nothingfound")
            }
        })
    })
}
