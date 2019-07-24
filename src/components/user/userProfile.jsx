import React, { Component } from 'react'
import LoggedInContext from './userContext'
import findInvestment from '../investment/findInvestment'
import removeInvestment from '../investment/removeInvestment'

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
            {this.state.investments.map((investment, index) => 
                <div className="propertyCard" key={index+1}>
                <div className="propertyImageAddress">
                    <div className="propertyImage">
                        {investment.media.map((media, index) => {
                            return (
                                <img alt="" src={media.url}/>
                            )
                        }
                            )}
                    </div>
                    <div className="propertyDetails">
                        <div>
                            <h4>{investment.address.displayableAddress}</h4>
                        </div>
                     </div>
                </div>

                <div className="propertyPriceDetails">
                    <h4>Sale price:</h4>
                    <p>{investment.price.displayPrice}</p>
                    <h4>Average monthly costs:</h4>
                    <p>{investment.price.monthlyRepayments}</p>
                    <h4>Assumed monthly profit:</h4>
                    <p>{investment.price.estimatedProfit}</p>
                    <p></p>
                </div>
                {/* <button onClick={() => removeInvestment(investment.propertyid)}/> */}
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
