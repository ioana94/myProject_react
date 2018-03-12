import React from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import * as companyUserActions from "../../Actions/companyUserActions";
import {connect} from "react-redux";

function EditUserCompany (props){

    const style ={
        root: {
            display: 'flex',
            width: 500,
            flexDirection: 'column',
            margin: 'auto',
        },
        header: {
            alignSelf: 'center',
            width: 500,
        },
        form:{
            display:'flex',
            alignSelf: 'center',
            width: 500,
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

    const newContact = {
            email: '',
            phone: '',
            address: '',
            website: '',
            city: '',
            about: '',
            avatarUrl: '',
    };

    const exitEdit = () => {
        props.exitEdit();
    }

    const onInitEdit = (value, contact) => {
        props.onInitEdit(value, contact);
    }

    return (
        <div style={style.root}>
            <div style={style.header}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="secondary">
                            Edit Company
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={style.form } >
                <form onSubmit={() => onInitEdit(props.companyToUpdate, newContact)}>
                    <div>
                        <TextField
                            fullWidth
                            autoFocus = {true}
                            name="name"
                            label="Company Name"
                            variant="name"
                            defaultValue={props.companyToUpdate.name}
                            onChange={(e) => {props.companyToUpdate.name = e.target.value; console.log(props.companyToUpdate.name)}}
                        />
                        {(props.companyToUpdate.contactInfo)?
                            <div>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    variant="email"
                                    defaultValue={props.companyToUpdate.contactInfo.email}
                                    onChange={(e) => {props.companyToUpdate.contactInfo.email = e.target.value; console.log(props.companyToUpdate.contactInfo.email)}}
                                />
                                <TextField
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    variant="phone"
                                    defaultValue={props.companyToUpdate.contactInfo.phone}
                                    onChange={(e) => {props.companyToUpdate.contactInfo.phone = e.target.value; console.log(props.companyToUpdate.contactInfo.phone)}}
                                />
                                <TextField
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    variant="address"
                                    defaultValue={props.companyToUpdate.contactInfo.address}
                                    onChange={(e) => {props.companyToUpdate.contactInfo.address = e.target.value; console.log(props.companyToUpdate.contactInfo.address)}}
                                />
                                <TextField
                                    fullWidth
                                    name="city"
                                    label="City"
                                    variant="city"
                                    defaultValue={props.companyToUpdate.contactInfo.city}
                                    onChange={(e) => {
                                        props.companyToUpdate.contactInfo.city = e.target.value;
                                        console.log(props.companyToUpdate.contactInfo.city)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="web"
                                    label="Website"
                                    variant="web"
                                    defaultValue={props.companyToUpdate.contactInfo.website}
                                    onChange={(e) => {
                                        props.companyToUpdate.contactInfo.website = e.target.value;
                                        console.log(props.companyToUpdate.contactInfo.website)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="avatar"
                                    label="Avatar URL"
                                    variant="avatar"
                                    defaultValue={props.companyToUpdate.contactInfo.avatarUrl}
                                    onChange={(e) => {
                                        props.companyToUpdate.contactInfo.avatarUrl = e.target.value;
                                        console.log(props.companyToUpdate.contactInfo.avatarUrl)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="about"
                                    label="Description"
                                    variant="about"
                                    defaultValue={props.companyToUpdate.contactInfo.about}
                                    onChange={(e) => {
                                        props.companyToUpdate.contactInfo.about = e.target.value;
                                        console.log(props.companyToUpdate.contactInfo.about)
                                    }}
                                />
                            </div>:
                            <div>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    variant="email"
                                    onChange={(e) => {newContact.email = e.target.value; console.log(newContact.email)}}
                                />
                                <TextField
                                fullWidth
                                name="phone"
                                label="Phone"
                                variant="phone"
                                onChange={(e) => {newContact.phone = e.target.value; console.log(newContact.phone)}}
                                />
                                <TextField
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    variant="address"
                                    onChange={(e) => {newContact.address = e.target.value; console.log(newContact.address)}}
                                />
                                <TextField
                                    fullWidth
                                    name="city"
                                    label="City"
                                    variant="city"
                                    onChange={(e) => {
                                        newContact.city = e.target.value;
                                        console.log(newContact.city)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="web"
                                    label="Website"
                                    variant="web"
                                    onChange={(e) => {
                                        newContact.website = e.target.value;
                                        console.log(newContact.website)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="avatar"
                                    label="Avatar URL"
                                    variant="avatar"
                                    onChange={(e) => {
                                        newContact.avatarUrl = e.target.value;
                                        console.log(newContact.avatarUrl)
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    name="about"
                                    label="Description"
                                    variant="about"
                                    onChange={(e) => {
                                        newContact.about = e.target.value;
                                        console.log(newContact.about)
                                    }}
                                />
                            </div>
                        }
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
        onInitEdit: (value, contact) => dispatch(companyUserActions.initEdit(value, contact)),
        exitEdit: () => dispatch(companyUserActions.onExitEdit()),
    };
};

const mapStateToProps = (state) => ({
    companyToUpdate: state.companyUserR.companyToUpdate,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(EditUserCompany);

export default withConnect;


