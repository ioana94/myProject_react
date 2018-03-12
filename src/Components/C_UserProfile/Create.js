import React from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import * as companyUserActions from "../../Actions/companyUserActions";
import {connect} from "react-redux";

function CreateUserCompany (props){

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

    const company = {
        "userId": localStorage.getItem('USER_ID'),
        "name": '',
    }

    const onCreateSubmit = (event) =>{
        event.preventDefault();
        props.initCreateCompany(company);

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
                            Create New Company
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={style.form } >
                <form onSubmit={onCreateSubmit}>
                    <br/>
                    <div>
                        <TextField
                            fullWidth
                            autoFocus = {true}
                            name="name"
                            label="Company name"
                            variant="name"
                            onChange={(e) => {company.name = e.target.value; console.log(company.name)}}
                        />

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
        initCreateCompany: (value) => dispatch(companyUserActions.initCreate(value)),
        exitCreate: () => dispatch(companyUserActions.onExitCreate()),
    };
};

const withConnect = connect(null, mapDispatchToProps)(CreateUserCompany);

export default withConnect;
