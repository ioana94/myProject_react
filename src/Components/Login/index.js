import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';
import * as authActions from '../../Actions/auth.js';


class Login extends Component {
    state = {
        username: '',
        password: '',
    };


    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    onLoginSubmit = (event) => {
        event.preventDefault();
        this.props.initLoginFlow(this.state);
    };

    exitLogin = () => {
        this.props.exitLogin();
    }

    render() {

        const style ={
            root: {
                display: 'flex',
                width: 300,
                flexDirection: 'column',
            },
            header: {
                backgroundColor: '#FF3F80',
                color: '#ffffff',
                alignSelf: 'center',
                width: 300,
                paddingLeft: 20,
            },
            form:{
                display:'flex',
                alignSelf: 'center',
                width: 300,
               padding:20,
            },
            button: {
                display:'flex',
                justifyContent: 'space-between',
            }

        };

        return (
            <div style={style.root}>
                <div style={style.header} >
                    <h1>Login</h1>
                </div>
                <div style={style.form } >
                <form onSubmit={this.onLoginSubmit}>
                    <TextField
                        fullWidth
                        autoFocus = {true}
                        name="username"
                        label="Username"
                        variant="username"
                        //value={this.state.username}
                        onChange={(event) => this.onInputChange(event)}
                    />

                    <TextField
                        fullWidth
                        type = "password"
                        name="password"
                        label="Password"
                        variant="password"
                        margin="normal"
                        //value={this.state.password}
                        onChange={this.onInputChange}
                    />
                    <br/><br/>
                    <div style={style.button}>
                        <Button type = "submit" color="secondary">Login</Button>
                        <Button type="button" color="primary" onClick={this.exitLogin}>Close</Button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoginFlow: (value) => dispatch(authActions.initLogin(value)),
        exitLogin: () => dispatch(authActions.exitLogin()),
    };
};

const withConnect = connect(null, mapDispatchToProps)(Login);

export default withConnect;