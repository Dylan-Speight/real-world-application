import React, { Component } from 'react'
import DomainController from './domainController'

class DomainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { postcode: "", state: "", token: "", results: [], data:[], markers:[]};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    };
    handleSubmit(event){
        const domainReturn = new DomainController(this.state)
        event.preventDefault();
        domainReturn.getAccessToken(this.state).then(response => domainReturn.getListingById(response).then(response => this.setState({markers:response}))
        ).then(() => console.log(this.state))
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
        console.log(this.state)

    }

    render() {
        return(
        <div className='domainForm'>
        <form onSubmit={this.handleSubmit}>
            <label>Postcode:</label>
            <input type="string" name="postcode" onChange={this.handleChange} />
            <label>State:</label>
            <input type="string" name="state"   onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
        </form>
        <div>{JSON.stringify(this.state.markers) && <pre>{JSON.stringify(this.state.markers)}</pre>}</div>
    </div>
        )
    }
}

export default DomainPage