import React from 'react';

import FormatQuote from 'material-ui-icons/FormatQuote';
import Email from 'material-ui-icons/Email';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui-icons/Edit';
import Language from 'material-ui-icons/Language';
import LocationOn from 'material-ui-icons/LocationOn';
import Phone from 'material-ui-icons/Phone';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Moment from 'react-moment';
import Education from '../../Components/S_UserProfile/Education';


import * as simpleUserActions from "../../Actions/simpleUserActions";
import {connect} from "react-redux";

function UserEdit (props) {

    const style = {
        root: {
            padding: 20,
            paddingTop: 5,
        },
        buttons: {
            display: 'flex',
            //justifyContent: 'flex-end',
        },
        textField:{
            fontSize: 'small',
        },
        logo:{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    };

    let user = {
        username: props.contact.username,
        firstName: props.contact.firstName,
        lastName: props.contact.lastName,
        contactInfo: {
            email: props.moreContact.email,
            phone:  props.moreContact.phone,
            address: props.moreContact.address,
            city: props.moreContact.city,
            website: props.moreContact.website,
            //avatarUrl: '',
            about: props.moreContact.about,
        },
    };

    const onSaveEdit = () => {
        props.onSave(user);
    }

    return (
            <Grid container style={style.root}>
                {/* ============= CONTACT INFO EDIT ================*/}
                    <Grid item xs={12}>
                        <h2>Contact Details</h2>
                        <div style={style.mainDetails}>
                            <TextField
                                defaultValue={user.firstName} type="text"
                                name="firstName"
                                onChange={(e) => {user.firstName= e.target.value; console.log(user.firstName);}}
                            />&nbsp;
                            <TextField
                                type="text"
                                name="lastName"
                                defaultValue={props.contact && props.contact.lastName}
                                onChange={(e) => {user.lastName = e.target.value; console.log(user.lastName);}}
                            />&nbsp;
                            <TextField
                                type="text"
                                name="username"
                                defaultValue={props.contact && props.contact.username}
                                onChange={(e) => {user.username = e.target.value; console.log(user.username);}}
                            />
                        </div>
                        {props.moreContact ?
                            <div style={style.details}>

                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>
                                                <FormatQuote fontSize={18} color='primary'/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="about"
                                                    defaultValue={user.contactInfo.about}
                                                    onChange={(e) => {user.contactInfo.about = e.target.value; console.log(user.contactInfo.about);}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>
                                                <Email fontSize={18} color='primary'/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="email"
                                                    defaultValue={props.moreContact && props.moreContact.email}
                                                    onChange={(e) => {user.contactInfo.email = e.target.value; console.log(user.contactInfo.email);}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>
                                                <Language fontSize={18} color='primary'/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="website"
                                                    defaultValue={props.moreContact && props.moreContact.website}
                                                    onChange={(e) => {user.contactInfo.website = e.target.value; console.log(user.contactInfo.website);}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>
                                                <Phone fontSize={18} color='primary'/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="phone"
                                                    defaultValue={props.moreContact && props.moreContact.phone}
                                                    onChange={(e) => {user.contactInfo.phone = e.target.value; console.log(user.contactInfo.phone);}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>
                                                <LocationOn fontSize={18} color='primary'/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="address"
                                                    defaultValue={props.moreContact && props.moreContact.address}
                                                    onChange={(e) => {user.contactInfo.address = e.target.value; console.log(user.contactInfo.address);}}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={1} style={style.logo}>

                                            </Grid>
                                            <Grid item xs={11}>
                                                <TextField
                                                    style={style.textField}
                                                    fullWidth
                                                    type="text"
                                                    name="city"
                                                    defaultValue={props.moreContact && props.moreContact.city}
                                                    onChange={(e) => {user.contactInfo.city = e.target.value; console.log(user.contactInfo.city);}}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>: null}

                    </Grid>
                    <Divider/>

                {/* ============= WORK EXPERIENCE EDIT ================*/}
                    {/*<Grid item xs={12}>*/}
                        {/*<h2>Work Experience</h2>*/}
                            {/*{props.workexp.map(n=> {*/}
                                {/*return(*/}
                                    {/*<div>*/}
                                        {/*<Grid container>*/}
                                            {/*<Grid item xs={1}>*/}
                                                {/*<Grid container>*/}
                                                    {/*<Grid item xs={12} style={style.editButton}>*/}
                                                        {/*<IconButton color="default"*/}
                                                            {/*// onClick={() => onDeleteSkill(n.id)}*/}
                                                        {/*>*/}
                                                            {/*<Edit/>*/}
                                                        {/*</IconButton> </Grid>*/}
                                                {/*</Grid>*/}
                                            {/*</Grid>*/}
                                            {/*<Grid item xs={1}>*/}
                                                {/*<Grid container>*/}
                                                    {/*<Grid item xs={12} style={style.tableDescr}><Moment format="MMM-YYYY" date={n.startDate}/> -<br/> <Moment format="MMM-YYYY" date={n.endDate}/></Grid>*/}
                                                {/*</Grid>*/}
                                            {/*</Grid>*/}
                                            {/*<Grid item xs={10}>*/}
                                                {/*<Grid container>*/}
                                                    {/*<Grid item xs={12} style={style.companyTitle} >{n.institution}</Grid>*/}
                                                    {/*<Grid item xs={12} >{n.description}</Grid>*/}
                                                {/*</Grid>*/}
                                            {/*</Grid>*/}
                                        {/*</Grid>*/}
                                    {/*</div>*/}
                                {/*);*/}
                            {/*})}*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                        {/*<Education/>*/}
                    {/*</Grid>*/}

                <Grid item xs={12}>
                    <Button onClick={onSaveEdit}>Save</Button>
                </Grid>
            </Grid>


    );
}


const mapDispatchToProps = (dispatch) => ({
    onSave: (user) => dispatch(simpleUserActions.saveNewDetails(user)),
});

const withConnect = connect(null, mapDispatchToProps)(UserEdit);

export default withConnect;