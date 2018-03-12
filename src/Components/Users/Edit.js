import React from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import * as usersActions from "../../Actions/usersActions";
import {connect} from "react-redux";

function EditUser (props){

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
        confPassword:props.userToUpdate.password,
    }


    const exitEdit = () => {
        props.exitEdit();
    }

    const onInitEdit = (value) => {
        if(props.userToUpdate.password === user.confPassword) {
            props.onInitEdit(value);
        }
        else {
            alert("parolele nu se potrivesc");
        }
    }

    return (
        <div style={style.root}>
            <div style={style.header}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="secondary">
                            Edit User
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={style.form } >
                <form onSubmit={() => onInitEdit(props.userToUpdate)}>
                    <div style={style.select }>
                        <Select  native={true}
                                 defaultValue={props.userToUpdate.userRoleId}
                                 onChange={(e) => {props.userToUpdate.userRoleId = e.target.value; console.log(props.userToUpdate.userRoleId)}}>
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
                            defaultValue={props.userToUpdate.username}
                            onChange={(e) => {props.userToUpdate.username = e.target.value; console.log(props.userToUpdate.username)}}
                        />
                        <TextField
                            fullWidth
                            name="firstName"
                            label="Firstname"
                            variant="firstName"
                            defaultValue={props.userToUpdate.firstName}
                            onChange={(e) => {props.userToUpdate.firstName = e.target.value; console.log(props.userToUpdate.firstName)}}
                        />
                        <TextField
                            fullWidth
                            name="lastName"
                            label="Lastname"
                            variant="lastName"
                            defaultValue={props.userToUpdate.lastName}
                            onChange={(e) => {props.userToUpdate.lastName = e.target.value; console.log(props.userToUpdate.lastName)}}
                        />
                        <TextField
                            fullWidth
                            type = "password"
                            name="password"
                            label="Password"
                            variant="password"
                            margin="normal"
                            onChange={(e) => {props.userToUpdate.password = e.target.value; console.log(props.userToUpdate.password)}}
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
                    <br/><br/>
                    <div style={style.button}>
                        <Button type = "submit" color="secondary" >Edit</Button>
                        <Button type="button" color="primary" onClick={exitEdit}>Close</Button>
                    </div>
                </form>
            </div>

        </div>
    );


}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitEdit: (value) => dispatch(usersActions.initEdit(value)),
        exitEdit: () => dispatch(usersActions.onExitEdit()),
    };
};

const mapStateToProps = (state) => ({
   userToUpdate: state.usersR.userToUpdate,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(EditUser);

export default withConnect;


