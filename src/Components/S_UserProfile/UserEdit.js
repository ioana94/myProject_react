import React from 'react';

import FormatQuote from 'material-ui-icons/FormatQuote';
import Email from 'material-ui-icons/Email';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui-icons/AddCircle';
import Language from 'material-ui-icons/Language';
import LocationOn from 'material-ui-icons/LocationOn';
import Phone from 'material-ui-icons/Phone';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import Moment from 'react-moment';
import * as moment from 'moment';
import Education from '../../Components/S_UserProfile/Education';


import * as simpleUserActions from "../../Actions/simpleUserActions";
import {connect} from "react-redux";

const AddWorkExp = (props) =>{
    const onInputChange = (event, idx) => {
        props.handleWorkExpChange(event, idx);
    };

    return(
        <div>
            {props.userWorkExperienceInfoList &&
            props.userWorkExperienceInfoList.map((n, idx) => {
                return(
                    <div key={idx}>
                        <TextField
                            fullWidth
                            label="Institution"
                            name='institution'
                            type="text"
                            value={n.institution}
                            //defaultValue={n.name}
                            onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            name='description'
                            type="text"
                            value={n.description}
                            //defaultValue={n.name}
                            onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField
                            fullWidth
                            name="startDate"
                            label="Start Date"
                            type="date"
                            value={n.startDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            name="endDate"
                            label="End Date"
                            type="date"
                            value={n.endDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </div>
                );
            })}
        </div>
    );
}

const AddEducation = (props) =>{
    const onInputChange = (event, idx) => {
        props.handleEducationChange(event, idx);
    };

    return(
        <div>
            {props.userEducationInfoList &&
            props.userEducationInfoList.map((n, idx) => {
                return(
                    <div key={idx}>
                        <TextField
                            fullWidth
                            label="Institution"
                            name='institution'
                            type="text"
                            value={n.institution}
                            //defaultValue={n.name}
                            onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            name='description'
                            type="text"
                            value={n.description}
                            //defaultValue={n.name}
                            onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField
                            fullWidth
                            name="startDate"
                            label="Start Date"
                            type="date"
                            value={n.startDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            name="endDate"
                            label="End Date"
                            type="date"
                            value={n.endDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </div>
                );
            })}
        </div>
    );
}


class UserEdit extends React.Component {
    
    state = {
        id: this.props.userInfo.id,
        username: this.props.contact.username,
        firstName: this.props.contact.firstName,
        lastName: this.props.contact.lastName,
        contactInfoId: this.props.userInfo.contactInfoId,
        contactInfo: this.props.moreContact,
        userWorkExperienceInfoList: this.props.workexp,
        userEducationInfoList: this.props.education,

    };
    handleAddWorkExp = () => {
        this.setState((prevState) =>({
            userWorkExperienceInfoList: prevState.userWorkExperienceInfoList.concat({}),
        }))
    };
    onChangeW = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const userWorkExperienceInfoList = [...this.state.userWorkExperienceInfoList];

        const elementToChange = userWorkExperienceInfoList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ userWorkExperienceInfoList });
    };

    handleAddEducation = () => {
        this.setState((prevState) =>({
            userEducationInfoList: prevState.userEducationInfoList.concat({}),
        }))
    };
    onChangeE = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const userEducationInfoList = [...this.state.userEducationInfoList];

        const elementToChange = userEducationInfoList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ userEducationInfoList });
    };


    onSaveEdit = () => {
        this.props.onSave(this.state);
    };

    onCloseEdit = () => {
        this.props.onClose();
    };


    render(){
        const style = {
            root: {
                padding: 20,
                paddingTop: 5,
            },
            buttons: {
                display: 'flex',
                justifyContent: 'space-between',
            },
            logo:{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
            mainDetails:{
                display: 'flex',
                flexDirection: 'column',
            },
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: 5,
                marginRight: 5,
                width: 200,
                fontSize: 'x-small',
            },
            subtitle: {
                display: 'flex',
                justifyContent: 'flex-start',
            }
        };

    return (
            <Grid container style={style.root}>
                <Grid item xs={12} style={style.header}>
                <pre>{ JSON.stringify(this.state, null, 2) }</pre>
                </Grid>
                {/* ============= CONTACT INFO EDIT ================*/}
                    <Grid item xs={12}>
                        <h2>Contact Details</h2>
                        <div style={style.mainDetails}>
                            <TextField
                                defaultValue={this.state.firstName} type="text"
                                label='Firstname'
                                name="firstName"
                                onChange={(e) => {this.state.firstName= e.target.value; console.log(this.state.firstName);}}
                            />&nbsp;
                            <TextField
                                type="text"
                                label='Lastname'
                                name="lastName"
                                defaultValue={this.props.contact && this.props.contact.lastName}
                                onChange={(e) => {this.state.lastName = e.target.value; console.log(this.state.lastName);}}
                            />&nbsp;
                            <TextField
                                type="text"
                                label='Username'
                                name="username"
                                defaultValue={this.props.contact && this.props.contact.username}
                                onChange={(e) => {this.state.username = e.target.value; console.log(this.state.username);}}
                            />
                        </div>
                        <br/>

                        <div style={style.details}>

                            <Grid container xs={12}>
                                <Grid item xs={1} style={style.logo}>
                                    <FormatQuote fontSize={18} color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        label='User description'
                                        style={style.textField}
                                        fullWidth
                                        type="text"
                                        name="about"
                                        defaultValue={this.state.contactInfo && this.state.contactInfo.about}
                                        onChange={(e) => {this.state.contactInfo.about = e.target.value; console.log(this.state.contactInfo.about);}}
                                    />
                                </Grid>

                                <Grid item xs={1} style={style.logo}>
                                    <Email fontSize={18} color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        style={style.textField}
                                        fullWidth
                                        label='Email'
                                        type="text"
                                        name="email"
                                        defaultValue={this.props.moreContact && this.props.moreContact.email}
                                        onChange={(e) => {this.state.contactInfo.email = e.target.value; console.log(this.state.contactInfo.email);}}
                                    />
                                </Grid>

                                <Grid item xs={1} style={style.logo}>
                                    <Language fontSize={18} color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        style={style.textField}
                                        fullWidth
                                        label='Website'
                                        type="text"
                                        name="website"
                                        defaultValue={this.props.moreContact && this.props.moreContact.website}
                                        onChange={(e) => {this.state.contactInfo.website = e.target.value; console.log(this.state.contactInfo.website);}}
                                    />
                                </Grid>

                                <Grid item xs={1} style={style.logo}>
                                    <Phone fontSize={18} color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        style={style.textField}
                                        label='Phone'
                                        fullWidth
                                        type="text"
                                        name="phone"
                                        defaultValue={this.props.moreContact && this.props.moreContact.phone}
                                        onChange={(e) => {this.state.contactInfo.phone = e.target.value; console.log(this.state.contactInfo.phone);}}
                                    />
                                </Grid>

                                <Grid item xs={1} style={style.logo}>
                                    <LocationOn fontSize={18} color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        style={style.textField}
                                        fullWidth
                                        label='Address'
                                        type="text"
                                        name="address"
                                        defaultValue={this.props.moreContact && this.props.moreContact.address}
                                        onChange={(e) => {this.state.contactInfo.address = e.target.value; console.log(this.state.contactInfo.address);}}
                                    />
                                </Grid>

                                <Grid item xs={1} style={style.logo}>

                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        style={style.textField}
                                        label='City'
                                        fullWidth
                                        type="text"
                                        name="city"
                                        defaultValue={this.props.moreContact && this.props.moreContact.city}
                                        onChange={(e) => {this.state.contactInfo.city = e.target.value; console.log(this.state.contactInfo.city);}}
                                    />
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Divider/>

                {/* ============= WORK EXPERIENCE ================*/}

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div style={style.subtitle}>
                                <h4>Work Experience</h4>
                                <IconButton onClick={this.handleAddWorkExp}><AddCircle/></IconButton>
                            </div>
                            <AddWorkExp
                                userWorkExperienceInfoList={this.state.userWorkExperienceInfoList}
                                handleWorkExpChange={this.onChangeW}
                            />

                        </Grid>
                    </Grid>
                </Grid>

                {/* ===============================================*/}

                {/* ============= EDUCATION ================*/}

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div style={style.subtitle}>
                                <h4>Education</h4>
                                <IconButton onClick={this.handleAddEducation}><AddCircle/></IconButton>
                            </div>
                            <AddEducation
                                userEducationInfoList={this.state.userEducationInfoList}
                                handleEducationChange={this.onChangeE}
                            />

                        </Grid>
                    </Grid>
                </Grid>
                {/* ===============================================*/}

                <Grid item xs={12} style={style.buttons}>
                    <Button onClick={this.onSaveEdit} color='secondary'>Save</Button>
                    <Button onClick={this.onCloseEdit}>Close</Button>
                </Grid>
            </Grid>


    );}
}

const mapStateToProps = (state) => ({
    userInfo: state.auth.loggedInUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
    onSave: (user) => dispatch(simpleUserActions.saveNewDetails(user)),
    onClose: () => dispatch(simpleUserActions.onCloseEdit()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(UserEdit);

export default withConnect;