import React, { Component } from 'react';
import Person from "./Person";
import FirebaseService from '../firebase-service';

class Home extends Component {
    constructor(props) {
        super(props);
        this.fs = new FirebaseService();
        this.db = this.fs.setFirebaseDatabase('users');
        this.personDetails = {};
        this.state =
            {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                emailId: ''
            };

    }


    postPersonDetails = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.db.set(this.state).then( () => {
            this.db.on('value', (snapshot) => {
                console.log(snapshot.val());
                this.personDetails = snapshot.val();
                this.setState({personSaved: true});
            })
        })
            .catch( (err) => console.log(err));
    };

    render() {
        if (this.state.personSaved) {
            return <Person person={this.personDetails}></Person>
        }
        return (
            <form onSubmit={this.postPersonDetails}>
                <h3>Fill your details</h3>
                <input required={true} type="text" placeholder="Enter Your First Name" onChange={ (e) => this.setState({firstName: e.target.value})}/><br/>
                <input required={true} type="text" placeholder="Enter Your Last Name" onChange={ (e) => this.setState({lastName: e.target.value})}/><br/>
                <input required={false} type="text" placeholder="Enter Your Contact Number" onChange={ (e) => this.setState({phoneNumber: e.target.value})}/><br/>
                <input required={true} type="email" placeholder="Enter Your Email" onChange={ (e) => this.setState({emailId: e.target.value})}/><br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Home;
