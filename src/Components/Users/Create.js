import React from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import * as usersActions from "../../Actions/usersActions";
import {connect} from "react-redux";

function CreateUser (props){

    const style ={
        root: {
            display: 'flex',
            width: 300,
            flexDirection: 'column',
            margin: 'auto',
        },
        header: {
            alignSelf: 'center',
            width: 300,
        },
        form:{
            display:'flex',
            alignSelf: 'center',
            width: 300,
            padding:10,
        },
        button: {
            display:'flex',
            justifyContent: 'space-between',
        },
        select: {
            display: 'flex',
            justifyContent: 'center',
        },

    };

    const user = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        confPassword:'',
        userRoleId: '',
        userWorkExperienceInfoList: [],
        userEducationInfoList: [],
    }

    const onCreateSubmit = (event) =>{
        event.preventDefault();
        if(user.password === user.confPassword){
            props.initCreateUser(user);
        }
        else {
            alert("parolele nu se potrivesc");
        }
    }

    const exitCreate = () => {
        props.exitCreate();
    }

    return (
        <div style={style.root}>
            <div style={style.header}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="secondary">
                            Create New User
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={style.form } >
                <form onSubmit={onCreateSubmit}>
                    <div style={style.select }>
                        <Select  native={true}
                                 onChange={(e) => {user.userRoleId = e.target.value; console.log(user.userRoleId)}}>
                            <option value="" hidden>Select User Type</option>
                            <option value="1">Admin</option>
                            <option value="2">Company</option>
                            <option value="3">Simple</option>
                        </Select>
                    </div>
                    <br/>
                    <div>
                        <TextField
                            fullWidth
                            autoFocus = {true}
                            name="username"
                            label="Username"
                            variant="username"
                            onChange={(e) => {user.username = e.target.value; console.log(user.username)}}
                        />
                        <TextField
                            fullWidth
                            name="firstName"
                            label="Firstname"
                            variant="firstName"
                            onChange={(e) => {user.firstName = e.target.value; console.log(user.firstName)}}
                        />
                        <TextField
                            fullWidth
                            name="lastName"
                            label="Lastname"
                            variant="lastName"
                            onChange={(e) => {user.lastName = e.target.value; console.log(user.lastName)}}
                        />
                        <TextField
                            fullWidth
                            type = "password"
                            name="password"
                            label="Password"
                            variant="password"
                            margin="normal"
                            onChange={(e) => {user.password = e.target.value; console.log(user.password)}}
                        />
                        <TextField
                            fullWidth
                            type = "password"
                            name="confPassword"
                            label="Confirm Password"
                            variant="password"
                            margin="normal"
                            onChange={(e) => {user.confPassword = e.target.value; console.log(user.confPassword)}}
                        />
                    </div>

                    <div>
                    </div>
                    <br/><br/>
                    <div style={style.button}>
                        <Button type = "submit" color="secondary">Create</Button>
                        <Button type="button" color="primary" onClick={exitCreate}>Close</Button>
                    </div>
                </form>
            </div>

        </div>
    );


}

const mapDispatchToProps = (dispatch) => {
    return {
        initCreateUser: (value) => dispatch(usersActions.initCreate(value)),
        exitCreate: () => dispatch(usersActions.onExitForm()),
    };
};

const withConnect = connect(null, mapDispatchToProps)(CreateUser);

export default withConnect;


