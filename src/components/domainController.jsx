import React  from 'react'
import axios from 'axios'
import queryString from 'query-string'

export class DomainController {
    constructor(props) {
        this.token = props.token
        this.results = []
        this.markers = []
        this.data = {"locations": [
              {"suburb": props.suburb, "state": props.state,
                "postCode": props.postcode}
            ]}  
        // this.getAccessToken = this.getAccessToken.bind(this)
        // this.getListingById = this.getListingById.bind(this)
   };
    getAccessToken() {
        console.log(this.data)

        const clientId = process.env.REACT_APP_DOMAIN_CLIENTID
        const secret = process.env.REACT_APP_DOMAIN_SECRET
        const data = queryString.stringify({
            grant_type: 'client_credentials',
            scope: 'api_listings_read'
        })
        return axios.post('https://auth.domain.com.au/v1/connect/token', data, {
            headers: {
                'Authorization': `Basic ${base64(`${clientId}:${secret}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((result) => {
                    this.token= result.data.access_token 
                    return (this.token)             
        }).catch(err => console.error(err.response.data))
    }
    
    getListingById(props) {
        // console.log(this.token)
        // console.log(this.data)
        // let searchParams = []
        // Object.values(this.data.locations[0]).map(field => {
        //     console.log(field)
        //     if (field !== undefined) {
        //         searchParams.push(field)
        //         // drop undefined before calling googlemaps
        //     }
        // })
        // console.log(searchParams)

        // console.log(props)
            return axios.post(`https://api.domain.com.au/v1/listings/residential/_search`, this.data, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then(result => {
                let info = []
                const { data } = result;
                // console.log(data)
                data.map((property) => {
                     if ((property.type === "PropertyListing") && (property.listing.listingType === "Sale") && (/[/$/]/.test(property.listing.priceDetails.displayPrice))){
                        info.push(property)
                    }})
                this.results = info
                return (this.results)
            }).catch(err => console.error(err.response.data))
    }
    }
    
function base64(str) {
    return Buffer.from(str).toString('base64')
}

export default DomainController