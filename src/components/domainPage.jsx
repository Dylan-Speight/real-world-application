import React, { Component } from 'react'
import DomainController from './domainController'
import GoogleMapsController from './googleMapsController'


class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { suburb: undefined,postcode: undefined, state: undefined, token: "", properties: [], data:[], maploaded: 0, results:0};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    };

    handleSubmit(event){
        const domainReturn = new DomainController(this.state)
        event.preventDefault();
        domainReturn.getAccessToken(this.state).then(response => 
            domainReturn.getListingById(response).then((response) => { 
                if (response) {
                this.setState({properties:response})
                }
            }).then(() => { 
                    this.setState({maploaded: 0})
                    console.log(this.state)
                    if (this.state.properties.length !== 0) {
                        this.setState({maploaded: 2})
                        this.setState({results: 2})
                    }
                    else {
                        this.setState({maploaded: 1})
                        this.setState({results: 1})

                    }
            })
        )

        
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        let results = [];
        let googleMap;
        let noResults = <div className="noResults" key="noResults">Your search returned no results</div>;
        let propertyResults
        const googleMapsController = new GoogleMapsController()
        if (this.state.maploaded === 2){
            googleMap = googleMapsController.mapsRender(this.state.properties);
        }
        if (this.state.maploaded === 1 || 0) {
            googleMap = null;
        }

        if (this.state.properties.length < 0 ){
            console.log(this.state)
            propertyResults = <div className="propertyResults" key="propertyResults">{this.state.properties.map(
                (property, index) => <div className="propertyCard" key={index+1}><div className="propertyImageAddress"><div className="propertyImage">
                    <img src={property.listing.media[0].url}/></div><div className="propertyDetails">

       7                    <div><h4>{property.listing.propertyDetails.displayableAddress}</h4><h4>Property Type:</h4>
                        <p>{property.listing.propertyDetails.propertyType}</p></div>
                        </div></div>
                        <div className="propertyPriceDetails">
                        <h4>Price:</h4><p>{property.listing.priceDetails.displayPrice}</p></div></div>)}</div>
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
                        <label>State:</label>
                        <input type="string" name="state"   onChange={this.handleChange} />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="resultsContainer" >{results.map(item => item)}
                </div>                
            </div>
        )
    }
}

export default DomainPage