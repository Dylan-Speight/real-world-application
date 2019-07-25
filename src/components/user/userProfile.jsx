import React, { Component } from 'react';
import LoggedInContext from './userContext';
import findInvestment from '../investment/findInvestment';
import removeInvestment from '../investment/removeInvestment';
import {  Card, Container, Column, Columns, CardContent,
Notification, Button, CardHeader, CardHeaderTitle } from 'bloomer'

export default class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            investments:[],
            isLoading: null,
            noResults: null
        }
    }
    componentDidMount() {
        this.getInvestments();
        
    }

    getInvestments() {
        findInvestment(this.context.email).then(res => {
            if (res.length !== 0){
                this.setState({investments:res})
            }
            else{
                this.setState({noResults:true})
            }})
            this.setState({isLoading:false})
    }
   
    render() {
        this.context = this.context
        if (!this.state.isLoading) {
            if(this.state.noResults){
                return (
                    <Container>
                        You have no investments saved.
                    </Container>
                )
            }
            return (
                <Container>
                    <Columns className='is-multiline'>
                {this.state.investments.map((investment, index) => {
                    return (
                        <Column>

                    <Card key={index+1}>
                        <CardHeader>
                            <CardHeaderTitle>
                            {investment.address.displayableAddress}
                            </CardHeaderTitle>
                        </CardHeader>
                        <CardContent>
                                <Columns className='investmentImageColumns' isDisplay='flex'>
                                    {investment.media.map((media, index) => {
                                        return (
                                            <Column key={index+1}  isDisplay='flex' className='investmentImages'>
                                                <img className='investmentImage' alt="" src={media.url} key={index + 1}/>
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
                            <Columns className='is-multiline'>
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
                            <Button isColor='danger' onClick={() => { removeInvestment({investment, email: this.context.email});this.getInvestments()}}>
                                Remove investment
                            </Button>
                    </CardContent>
                </Card>
            </Column>)

            })}
        </Columns>

    </Container>
            )
        } else {
            return (
                <Container>
                    Loading investments
                </Container>
            )
        }
    }
}

UserProfile.contextType = LoggedInContext
