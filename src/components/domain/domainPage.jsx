import React, { Component } from 'react'
import DomainController from './domainController'
import GoogleMapsController from '../google_maps/googleMapsController'
import cookie from 'react-cookies'
import LoggedInContext from '../user/userContext'
import saveUserInvestment from '../user/userInvestments'
class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false ,suburb: undefined,postcode: undefined, token: "", properties: [], data:[], maploaded: 0, results:0};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    };
    
    handleSubmit(event){
        const domainReturn = new DomainController(this.state)
        event.preventDefault();
        console.log(this.state.suburb, this.state.postcode)
        if (this.state.suburb !== undefined || this.state.postcode !== undefined){
            domainReturn.getAccessToken(this.state).then(response => 
                domainReturn.getListingById(response).then((response) => { 
                    if (response) {
                        this.setState({maploaded: 0})
                        this.setState({properties:response})
                        if (this.state.properties.length !== 0) {
                            this.setState({maploaded: 2})
                            this.setState({results: 2})
                        }
                        else {
                            this.setState({maploaded: 1})
                            this.setState({results: 1})
                        }
                        console.log(this.state)
                    }
                        
                })
            )
        }
        else {
            console.log("empty search")
        }

        
    }
    
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render() {
        this.context = this.context
        console.log(this.context)
        let results = [];
        let googleMap;
        let noResults = <div className="noResults" key="noResults">Your search returned no results</div>;
        let propertyResults = 
            <div className="propertyResults" key="propertyResults">
                {this.state.properties.map((property, index) => 
                    <div className="propertyCard" key={index+1}>
                        <div className="propertyImageAddress">
                            <div className="propertyImage">
                               <img src={property.listing.media[0].url}/>
                            </div>
                            <div className="propertyDetails">
                                <div>
                                    <h4>{property.listing.propertyDetails.displayableAddress}</h4>
                                    <h4>Property Type:</h4>
                                    <p>{property.listing.propertyDetails.propertyType}</p>
                                </div>
                             </div>
                        </div>
                    <div className="propertyPriceDetails">
                        <h4>Price:</h4>
                        <p>{property.listing.priceDetails.displayPrice}</p>
                    </div>
                    <button onClick={() => saveUserInvestment()}/>
                </div>)}
            </div>
        const googleMapsController = new GoogleMapsController()
        if (this.state.maploaded === 2){
            googleMap = googleMapsController.mapsRender(this.state.properties);
        }
        if (this.state.maploaded === 1 || 0) {
            googleMap = null;
        }

      
        if (this.state.results === 1){
            results = [noResults];
        }
        if (this.state.results === 2) {
            results = [googleMap, propertyResults]
        }

        return(
            <div>
                <div className='domainForm'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Suburb:</label>
                        <input type="string" name="suburb" onChange={this.handleChange} />
                        <label>Postcode:</label>
                        <input type="string" name="postcode" onChange={this.handleChange} />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="resultsContainer" >{results.map(item => item)}
                </div>                
            </div>
        )
    }
}
DomainPage.contextType = LoggedInContext

export default DomainPage