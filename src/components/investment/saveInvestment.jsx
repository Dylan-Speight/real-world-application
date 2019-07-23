import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
var jwtDecode = require('jwt-decode');


export default function saveInvestment(property, email) {       
    console.log(property) 
    console.log(email) 

    const formattedData = {
        price: {
            income: "INCOME",
            expenses: "EXPENSES",
            value: "VALUE",
            rio: "ROI",
            displayPrice: property.listing.priceDetails.displayPrice
            },
            address: {
                displayableAddress: property.listing.propertyDetails.displayableAddress,
                state: property.listing.propertyDetails.state,
                postcode: property.listing.propertyDetails.postcode,
                suburb: property.listing.propertyDetails.suburb,
                street: property.listing.propertyDetails.street,
                streetNumber: property.listing.propertyDetails.streetNumber
            },
            media: property.listing.media,
            description: property.listing.propertyDetails.propertyType,
            propertyid: property.listing.id,
            userid: email
    }
    fetch('http://localhost:4000/api/saveinvestment', {
        method: 'POST',
        body: JSON.stringify(formattedData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
    if (res.status === 200) {
        console.log(res)
    } else {
        const error = res.json().then(response => {
        console.log(response.error)
    }).then( () => {throw error})
    }
    })
    .catch(err => {
    alert('Error saving investment please try again');
    });    
}










