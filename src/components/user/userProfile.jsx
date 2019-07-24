import React, { Component } from 'react';
import LoggedInContext from './userContext';
import findInvestment from '../investment/findInvestment';
import removeInvestment from '../investment/removeInvestment';
import cookie from 'react-cookies';
import {  Card, Container, Modal, ModalContent, ModalClose, ModalBackground, 
    Column, Columns, CardContent, Content, Media, MediaContent,
Notification, Button, CardHeader, CardHeaderTitle } from 'bloomer'

export default class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            investments:[]
        }
    }
    componentDidMount() {
        if (this.state.investments.length === 0) {
            findInvestment(this.context.email).then(res => {
                this.setState({investments:res})
                cookie.save('investments', res)
            })
        }
    }
    render() {
        this.context = this.context
        
        return (
            <Container>
            {this.state.investments.map((investment, index) => {
                    //  if (property.listing.priceDetails.estimatedProfit < 0) {
                    // }
                    // {limitResults}
                return (
                <Card key={index+1}>
                    <CardHeader>
                        <CardHeaderTitle>
                        {investment.address.displayableAddress}
                        </CardHeaderTitle>
                    </CardHeader>
                    <CardContent>
                            <Columns>
                                {investment.media.map((media, index) => {
                                    return (
                                        <Column>
                                            <img className='propertyImage' alt="" src={media.url} key={index + 1}/>
                                        </Column>
                                    )})}
                            </Columns>
                            <Columns>
                                <Column>
                                    <Notification>
                                        Sale price: ${investment.price.displayPrice}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Average monthly costs: ${investment.price.monthlyRepayments}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Assumed monthly profit: ${investment.price.estimatedProfit}
                                    </Notification>
                                </Column>
                        </Columns>
                        <Columns>
                                <Column>
                                    <Notification>
                                        Initial deposit: ${investment.price.deposit}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Interest rate: ${investment.price.interestRate}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                    Loan term: ${investment.price.loanTerm}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Initial purchase costs: ${investment.price.purchaseCosts}
                                    </Notification>
                                </Column>
                                <Column>
                                    <Notification>
                                        Ongoing costs: ${investment.price.ongoingCosts}
                                    </Notification>
                                </Column>
                        </Columns>
                        <Button isColor='danger' onClick={() => removeInvestment(investment, this.context.email)}>
                            Remove investment
                        </Button>
                </CardContent>
            </Card>
            )
        })}
        </Container>
        )
    }
}

UserProfile.contextType = LoggedInContext
