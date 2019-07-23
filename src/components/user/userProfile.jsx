import React, { Component } from 'react'
import LoggedInContext from './userContext'
import findInvestment from '../investment/findInvestment'


export default class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            investmentsLoaded: false,
            investments:[]
        }
    }
    componentDidMount() {
        console.log(findInvestment(this.context.email))
        findInvestment(this.context.email).then(res => 
            this.setState({investments:res})).then(() => this.state.investments.map(e => console.log(e))).then(() => this.setState({investmentsLoaded: true}))
    }
    render() {
        this.context = this.context
        console.log(this.context)
        let results =[]
        let investmentResults = 
        <div className="investmentResults">
            {this.state.investments.map(investment => 
                <div className="investmentCard">
                    <div className="investmentImageAddress">
                        <div className="investmentImage">
                            <img alt="" src={investment.media[0].url}/>
                        </div>
                        <div className="investmentDetails">
                            <div>
                                <h4>{investment.address.displayableAddress}</h4>
                                <h4>Property Type:</h4>
                                <p>{investment.description}</p>
                            </div>
                        </div>
                    </div>
                <div className="investmentPriceDetails">
                    <h4>Price:</h4>
                    <p>{investment.price.displayPrice}</p>
                </div>
            </div>)}
        </div>
        if (this.state.investmentsLoaded) {
            results = [investmentResults]
        }
        return (
            <div className="resultsContainer">
                {results[0]}
            </div>
        )
    }
}

UserProfile.contextType = LoggedInContext
