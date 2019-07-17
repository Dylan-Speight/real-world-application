import axios from 'axios'
import queryString from 'query-string'

export class DomainController {
    constructor(props) {
        this.token = props.token
        this.results = []
        this.markers = []
        this.pageEnd = false;
        this.data = {"locations": [
              {"suburb": props.suburb, "state": props.state,
                "postCode": props.postcode}
            ], "page": 1,"pageSize": 99 }  
        this.propertiesToRemove = ['advertiser', 'hasFloorplan', 'hasVideo', 'headline', 'inspectionSchedule', 'labels', 'listingSlug', 'summaryDescription']
   }

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
            return axios.post(`https://api.domain.com.au/v1/listings/residential/_search`, this.data, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then(result => {
                const { data } = result;
                data.map((property) => { 
                     if ((property.type === "PropertyListing") && (property.listing.hasOwnProperty("media")) && (property.listing.listingType === "Sale") && (/[/$/]/.test(property.listing.priceDetails.displayPrice))){
                        this.propertiesToRemove.map(currentProperty => {                             
                            if (property.listing.hasOwnProperty(currentProperty)) {
                            delete property.listing[currentProperty]
                        }})

                        this.results.push(property)
                    }})
                    if (data.length === 0) {
                        return this.results
                    }
                    else {
                        this.data.page += 1
                        return (this.getListingById(this.results))  
                    }
            }).catch(err => console.error(err.data))
     }
}
    
function base64(str) {
    return Buffer.from(str).toString('base64')
}

export default DomainController