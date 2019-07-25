import React, { Component } from 'react'
import DomainController from './domainController'
import GoogleMapsController from '../google_maps/googleMapsController'
import LoggedInContext from '../user/userContext'
import saveInvestment from '../investment/saveInvestment'
import { Columns, Column, Field, Control, Container, 
    Select, Icon, Label, Input, Button, 
    Card, CardContent, CardHeader, CardHeaderTitle, CardHeaderIcon, Notification} from 'bloomer'
class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false,
            cardStatus: 'is-display',
            suburb: undefined,
            postcode: undefined,
            state: undefined,
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
            ongoingCosts: undefined,
            investmentSaved: false
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
        if (this.state.suburb !== undefined && this.state.postcode !== undefined){
            domainReturn.getAccessToken(this.state, this.finances).then(response => 
                domainReturn.getListingById(response).then((response => { 
                    if (response) {
                        this.setState({maploaded: 0})
                        this.setState({properties:response})
                        if (this.state.properties.length !== 0) {
                            this.setState({maploaded: 2})
                            this.setState({results: 2})
                            this.setState({cardStatus: 'is-hidden'})
                        }
                        else {
                            this.setState({maploaded: 1})
                            this.setState({results: 1})
                        }
                    }   
                }))
            )
        }
    }
    
    cardControl() {
        var cardStatus = (this.state.cardStatus === "is-hidden") ? "is-display" : "is-hidden";
        this.setState({cardStatus: cardStatus})
    }
    render() {
        this.context = this.context
        const { deposit,
            interestRate,
            loanTerm,
            purchaseCosts,
            ongoingCosts} = this.state
        let results = []
        let googleMap
        let noResults = 
            <Container>
                <Notification isFullWidth>
                    Your search returned no results
                </Notification>
            </Container>

        let propertyResults = 
            <Column className="propertyResults">
            {this.state.properties.map((property, index) => {
                return (
                <Card key={index+1}>
                    <CardHeader>
                        <Label>
                        {property.listing.propertyDetails.displayableAddress}
                        </Label>
                    </CardHeader>
                    <CardContent>
                        <Container>
                            <Columns isDisplay='flex' isCentered>
                                {property.listing.media.map((media, index) => {
                                    return (
                                        <Column isDisplay='flex' key={index+1}>
                                        <img alt=""  src={media.url}/>
                                        </Column>
                                    )
                                })}
                            </Columns>
                        </Container>
                        <Container>
                            <Columns>
                                <Column>
                                    <Notification>
                                        Sale price: ${property.listing.priceDetails.displayPrice}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Average monthly costs: ${property.listing.priceDetails.monthlyRepayments}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Assumed monthly profit: ${property.listing.priceDetails.estimatedProfit}
                                    </Notification>
                                </Column>
                        </Columns>
                        <Button isColor='success' onClick={() => { this.setState({investmentSaved: true}); saveInvestment(property, deposit, interestRate, loanTerm, purchaseCosts, ongoingCosts, this.context.email)}}>Save Investment</Button>
                    </Container>
                </CardContent>
            </Card>)
        })}
    </Column>
        

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
            results = 
            <Columns>
                {googleMap}
                {propertyResults}
            </Columns>
        }
        return(
                <Container>
                    <Card isFullWidth>
                        <CardHeader isFullWidth>
                            <CardHeaderTitle>Enter your information</CardHeaderTitle>
                            <CardHeaderIcon onClick={this.cardControl.bind(this)}>
                                <Icon className="fa fa-angle-down" style={{background: 'grey'}} onClick={() => this.cardControl.bind(this)}></Icon>
                            </CardHeaderIcon>
                        </CardHeader>
                        <CardContent className={this.state.cardStatus}>
                            <Columns>
                                <Column>
                                    <Field>
                                        <Label>Suburb</Label>
                                        <Control>
                                            <Input type="text" name="suburb" placeholder='Suburb' onChange={this.handleLocationChange}/>
                                        </Control>
                                    </Field>
                                </Column>
                                <Column>
                                    <Field>
                                        <Label>Postcode</Label>
                                        <Control>
                                            <Input type="number" name="postcode" placeholder='Postcode' onChange={this.handleLocationChange} required/>
                                        </Control>
                                    </Field>
                                </Column>
                                <Column>
                                    <Field >
                                        <Label>State:</Label>
                                        <Control >
                                            <Select name="state" isFullWidth onChange={this.handleLocationChange}> 
                                                <option value='QLD'>Queensland</option>
                                                <option value='NSW'>New South Wales</option>
                                                <option value='VIC'>Victoria</option>
                                                <option value='SA'>South Australia</option>
                                                <option value='WA'>Western Australia</option>
                                                <option value='TAS'>Tasmania</option>

                                            </Select>
                                        </Control>
                                    </Field>
                                </Column>
                            </Columns>
                            <Columns>
                                <Column>
                                    <Field>
                                        <Label>Deposit</Label>
                                        <Control>
                                            <Input type="number" placeholder='Deposit' required name="deposit" onChange={this.handleFinanceChange}/>
                                        </Control>
                                    </Field>
                                </Column>
                                <Column>
                                    <Field>
                                        <Label>Interest Rate</Label>
                                        <Control>
                                            <Input type="number" placeholder='Interest Rate' required name="interestRate" onChange={this.handleFinanceChange}/>
                                        </Control>
                                    </Field>
                                </Column>
                                <Column>
                                    <Field>
                                        <Label>Loan Term</Label>
                                        <Control>
                                            <Input type="number" placeholder='Loan Term' required name="loanTerm" onChange={this.handleFinanceChange}/>
                                        </Control>
                                    </Field>
                                </Column>
                            </Columns>
                            <Columns>
                                <Column>
                                    <Field>
                                        <Label>Purchase Costs (fees)</Label>
                                        <Control>
                                            <Input type="number" placeholder='Purchase Costs' required name="purchaseCosts" onChange={this.handleFinanceChange} />
                                        </Control>
                                    </Field>
                                </Column>
                                <Column>
                                    <Field>
                                        <Label>Ongoing Costs (upkeep)</Label>
                                        <Control>
                                            <Input type="number" placeholder='Ongoing Costs' required name="ongoingCosts" onChange={this.handleFinanceChange}/>
                                        </Control>
                                    </Field>
                                </Column>
                            </Columns>
                            
                            <Field isDisplay="flex" style={{'justify-content':'space-around'}}>
                                <Control>
                                    <Button onClick={this.handleSubmit} isColor='primary'>
                                        <p>Search</p>
                                    </Button>
                                </Control>
                            </Field>
                        </CardContent>
                    </Card>
                    {results}

                </Container>
        )
    }
}
DomainPage.contextType = LoggedInContext

export default DomainPage