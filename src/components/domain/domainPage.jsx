import React, { Component } from 'react'
import DomainController from './domainController'
import GoogleMapsController from '../google_maps/googleMapsController'
import LoggedInContext from '../user/userContext'
import saveInvestment from '../investment/saveInvestment'

class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, 
            suburb: undefined,
            postcode: undefined,
            token: "",
            properties: [],
            data:[],
            maploaded: 0,
            results:0,
            rent:[],
            deposit : undefined,
            interestRate : undefined,
            loanTerm : undefined,
            purchaseCosts : undefined,
            ongoingCosts: undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleFinanceChange = this.handleFinanceChange.bind(this)
    };
    

    handleLocationChange(event) {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }


    handleFinanceChange(event) {
        const { value, name } = event.target;
        this.state[name] = parseInt(value)
    }

    handleSubmit(event){
        const domainReturn = new DomainController(this.state)
        event.preventDefault();
        console.log(this.state.suburb, this.state.postcode)
        if (this.state.suburb !== undefined && this.state.postcode !== undefined){
            domainReturn.getAccessToken(this.state, this.finances).then(response => 
                domainReturn.getListingById(response).then((response => { 
                    if (response) {
                        console.log(response)
                        this.setState({maploaded: 0})
                        this.setState({properties:response})
                        console.log(this.state.properties)
                        if (this.state.properties.length !== 0) {
                            this.setState({maploaded: 2})
                            this.setState({results: 2})
                        }
                        else {
                            this.setState({maploaded: 1})
                            this.setState({results: 1})
                        }
                    }   
                }))
            )
        }
        else {
            console.log("empty search")
        }

        
    }
    

    render() {
        this.context = this.context
        let results = []
        let googleMap
        let noResults = <div className="noResults" key="noResults">Your search returned no results</div>
        let propertyResults = 
            <div className="propertyResults" key="propertyResults">
                {this.state.properties.map((property, index) => {
                if (property.listing.priceDetails.estimatedProfit > 0 ){
                    return (
                    <div className="propertyCard" key={index+1}>
                        <div className="propertyImageAddress">
                            <div className="propertyImage">
                                {property.listing.media.map((media, index) => {
                                    return (
                                        <img alt="" src={media.url}/>
                                    )
                                }
                                    )}
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
                            <h4>Sale price:</h4>
                            <p>{property.listing.priceDetails.displayPrice}</p>
                            <h4>Average monthly costs:</h4>
                            <p>{property.listing.priceDetails.monthlyRepayments}</p>
                            <h4>Assumed monthly profit:</h4>
                            <p>{property.listing.priceDetails.estimatedProfit}</p>
                            <p></p>
                        </div>
                        <button onClick={() => saveInvestment(property, this.context.email)}/>
                    </div>)}
                })}
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
                        <input type="string" name="suburb" onChange={this.handleLocationChange} required/>
                        <label>Postcode:</label>
                        <input type="string" name="postcode" onChange={this.handleLocationChange} required/>

                        <h3>Pricing</h3>
                        <label>Deposit:</label>
                        <input type="string" name="deposit" onChange={this.handleFinanceChange} />

                        <label>Interest Rate:</label>
                        <input type="string" name="interestRate" onChange={this.handleFinanceChange} />

                        <label>Loan Term:</label>
                        <input type="string" name="loanTerm" onChange={this.handleFinanceChange} />
                       
                        <label>Purchase Costs (fees):</label>
                        <input type="string" name="purchaseCosts" onChange={this.handleFinanceChange} />
                        
                        <label>Ongoing Costs:</label>
                        <input type="string" name="ongoingCosts" onChange={this.handleFinanceChange} />
                    
                        <input type="submit" value="Submit"/>
                    </form>
                </div>

                <div className="resultsContainer">
                {results.map(item => item)}
                </div>                
            </div>
        )
    }
}
DomainPage.contextType = LoggedInContext

export default DomainPage