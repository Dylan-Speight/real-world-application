import React, { Component } from 'react'
import axios from 'axios'
import queryString from 'query-string'

export class GenerateToken extends Component {

    constructor(props) {
        super(props);
        this.state = { token: "", results:[], markers: []};
        this.getAccessToken = this.getAccessToken.bind(this)
        this.getListingById = this.getListingById.bind(this)
    };
    getAccessToken() {
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
                this.setState({ token: result.data.access_token})
                console.log(this.state.token)
                
        }).catch(err => console.error(err.response.data))
    }
    
    getListingById() {
        console.log(this.state.token)
            const data =  {"locations": [
                  {
                    "state": "QLD",
                    "postCode": "4211",    }
                ]}  
            return axios.post(`https://api.domain.com.au/v1/listings/residential/_search`,data, {
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                }
            })
            .then(result => {
                let markers = []
                const { data } = result;
                this.setState({results:data})
                this.state.results.map(result => markers.push({"latitude": result.listing.propertyDetails.latitude, 'longitude': result.listing.propertyDetails.longitude }))
                this.setState({markers:markers})
                console.log(this.state.markers)
            }).catch(err => console.error(err.response.data))
        }
    render(){
            return (
                    <div>
                        <button onClick={this.getAccessToken}>GenerateToken</button>
                        <button onClick={this.getListingById}>Search for listings</button>
                    </div>
            );
        }
    }
function base64(str) {
    return Buffer.from(str).toString('base64')
}

export default GenerateToken 