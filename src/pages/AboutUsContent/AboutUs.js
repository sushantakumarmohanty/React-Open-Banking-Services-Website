import { Modal } from '@material-ui/core';
import React, { Component } from 'react'
import AppHeader from '../AppHeader'
import ModalFile from '../Modal'
import Proppass from '../Propspass';
import MapListData from '../Maplist'
import Button from '@material-ui/core/Button';
import FormComponent from './FormComponent'

//******************TODO Props pass from one component to another************************
export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pass: '',
            name: "Ram charan",
            data: [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Victor Wayne" },
                { id: 3, name: "Jane Doe" },
                { id: 4, name: "Jane Ram" },
                { id: 5, name: "Jane Shyam" },
                { id: 6, name: "Birat Doe" },
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            pass: event.target.value
        });
    }



    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (

            <div style={{ margin: '10px' }}>
                <AppHeader />
                {/* <form onSubmit={this.handleSubmit}>
                    <label className="handle-color">
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <label className="handle-color">
                        Email:
                        <input type="text" value={this.state.pass} onChange={this.handleChange} />
                    </label>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form> */}
                <div style={{marginRight:'450px',marginLeft:'450px',backgroundColor:'InactiveCaption'}}>
                <FormComponent/>
                </div>
              
                <div className="mt-3">
                    <ModalFile />
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" color="secondary" onClick={() => this.props.history.push("/ContactUs")}>Contact Us</Button>
                </div>

                <Proppass
                    value={this.state.name}
                    email="ramcharan@gmail.com" />
                <div>
                    <MapListData
                        data={this.state.data} />
                </div>
            </div>
        );
    }
}