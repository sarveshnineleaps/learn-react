import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import FirebaseService from '../firebase-service';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.fs = new FirebaseService();
        // this.dbUser = this.fs.setFirebaseDatabase('users');
    }

    login = (e) => {
        e.preventDefault();
        this.setState({loggedIn: true});
    };

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home"/>
        }
        return (
            <form onSubmit={this.login}>
                <label>Username : </label>
                <input type="text" onChange={ (e) => this.setState({username: e.target.value})} required={true} placeholder="Enter Username"/><br/>
                <label>Password : </label>
                <input type="password" onChange={ (e) => this.setState({password: e.target.value})} required={true} placeholder="Enter Password"/><br/>
                <button type="submit">Login</button>
            </form>
            )
    }
}

export default Login;
