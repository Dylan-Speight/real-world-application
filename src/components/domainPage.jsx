import React, { Component } from 'react'
import DomainController from './domainController'
import GoogleMapsController from './googleMapsController'


class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { suburb: undefined,postcode: undefined, state: undefined, token: "", properties: [], data:[], maploaded: 0, noResults:0};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        const search = this.state.search
    };
    handleSubmit(event){
        const domainReturn = new DomainController(this.state)
        event.preventDefault();
        domainReturn.getAccessToken(this.state).then(response => domainReturn.getListingById(response).then(response => this.setState({properties:response}))
        ).then(() => console.log(this.state)).then(() => { 
            if (this.state.properties.length !== 0) { 
                this.setState({maploaded: 1})}
            else {this.setState({noResults: 1})}console.log(this.state)})
        
    }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        let themap;
        let noResults;
        const googleMapsController = new GoogleMapsController
        if (this.state.maploaded === 1){
            themap = googleMapsController.mapsRender(this.state.properties);
        }
        if (this.state.noResults === 1){
            noResults = <div className="noresults">Your search returned no results</div>
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
                <div className='resultsContainer'>
                                       <div>{noResults}</div> 
                                    <div>{themap}</div>
                                    <div>{(this.state.properties.map(test => `<div class="propertyCard">` + Object.values(test.listing.propertyDetails).map(item => item + " ") + `</div>`)) && <pre>{this.state.properties.map(test => Object.values(test.listing.propertyDetails).map(item => item + " \n"))}</pre>}</div>
                                
                </div>
            </div>
        )
    }
}

export default DomainPage