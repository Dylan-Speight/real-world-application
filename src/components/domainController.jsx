import React  from 'react'
import axios from 'axios'
import queryString from 'query-string'

export class DomainController {
    constructor(props) {
        this.token = props.token
        this.results = []
        this.markers = []
        this.data = {"locations": [
              {"state": props.state,
                "postCode": props.postcode}
            ]}  
        // this.getAccessToken = this.getAccessToken.bind(this)
        // this.getListingById = this.getListingById.bind(this)
   };
    getAccessToken() {
        // console.log(this.data)

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
        console.log(this.token)
        console.log(this.data)
        console.log(props)


            return axios.post(`https://api.domain.com.au/v1/listings/residential/_search`, this.data, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then(result => {
                let markerResult  = []
                const { data } = result;
                // console.log(data)
                data.map((listingResult) => {
                     if ((listingResult.type === "PropertyListing") && (listingResult.listing.listingType === "Sale") && (/[/$/]/.test(listingResult.listing.priceDetails.displayPrice))){
                        console.log(listingResult.listing.priceDetails.displayPrice)
                        markerResult.push({"latitude": listingResult.listing.propertyDetails.latitude, 'longitude': listingResult.listing.propertyDetails.longitude })
                    }})
                this.markers = markerResult
                console.log(this.markers)
                return this.markers
            }).catch(err => console.error(err.response.data))
    }

    render(){
            return (<div>test2
                {/* <button onClick={this.getAccessToken}>GenerateToken</button>
                <button onClick={this.getListingById}>Search for listings</button>      */}
                </div>)
        }
    }
    
function base64(str) {
    return Buffer.from(str).toString('base64')
}

export default DomainController