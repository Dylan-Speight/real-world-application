import React, { Component } from 'react'
import LoggedInContext from './userContext'
import findUserInvestment from './userInvestments'


export default class UserProfile extends Component {
    constructor(props){
        super(props)
    }
    render() {
        this.context = this.context
        console.log(this.context)
        let investments = findUserInvestment(this.context.email)
        return (
            <div>
                { investments}
            </div>
        )
    }
}

UserProfile.contextType = LoggedInContext
