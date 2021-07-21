import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
export class Propspass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // value:this.props 
        }
    }
    render() {
        return (
            <div>
                <h1>Hey please contact to the: {this.props.value}</h1>
                <h1>Email ID: {this.props.email}</h1>
            </div>
        )
    }
}

export default Propspass
