import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';

import * as simpleUserActions from "../../Actions/simpleUserActions";
import {connect} from "react-redux";
import * as jobsActions from "../../Actions/jobsActions";

const AddWorkExp = (props) => {
    const onInputChange = (event, elemIndex) => {
        props.handleWorkExpChange(event, elemIndex);
    };
    return (
        <div>
            {props.userWorkExperienceInfoList &&
            props.userWorkExperienceInfoList.map((n, idx) => {
                return(
                    <Grid  key={idx}>
                        <TextField fullWidth label="Institution name" type="text"
                            name='institution'
                            value={n.institution}
                            //defaultValue={n.name}
                            onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField fullWidth label="Description" type="text"
                                   name='description'
                                   value={n.description}
                                    //defaultValue={n.name}
                                   onChange={(evt) => onInputChange(evt, idx)}
                        />
                        <TextField fullWidth name="startDate" label="Start Date"
                            type="date"
                            value={n.startDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField fullWidth name="endDate" label="End Date"
                            type="date"
                            value={n.endDate}
                            onChange={(evt) => onInputChange(evt, idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                );
            })}
        </div>
    );
};

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

class EditSimpleUser extends React.Component {
    state = {
        id: this.props.loggedInUserInfo.id,
        username: this.props.loggedInUserInfo.username,
        firstName: this.props.loggedInUserInfo.firstName,
        lastName: this.props.loggedInUserInfo.lastName,
        contactInfo: {
            email: this.props.contact.contactInfo && this.props.contact.contactInfo.email,
            about: this.props.contact.contactInfo && this.props.contact.contactInfo.about,
            phone: this.props.contact.contactInfo && this.props.contact.contactInfo.phone,
            address: this.props.contact.contactInfo && this.props.contact.contactInfo.address,
            website: this.props.contact.contactInfo && this.props.contact.contactInfo.website,
            city: this.props.contact.contactInfo && this.props.contact.contactInfo.city,
        },
        contactInfoId: this.props.loggedInUserInfo.contactInfoId,
       // contactInfo:  this.props.contact.contactInfo,
        userWorkExperienceInfoList: this.props.contact.userWorkExperienceInfoList,
        userEducationInfoList: this.props.contact.userEducationInfoList,

    };

    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    onInputChangeContact = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState.contactInfo[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    // ================= ADD WORK EXPERIENCE =================================

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
    // =====================================================================


    // ================= ADD EDUCATION =====================================
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

    // =====================================================================

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
            header: {
                display: 'flex',
                justifyContent: 'center',
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

        return(
            <Grid container style={style.root}>
                <Grid item xs={12} >
                    <pre>{ JSON.stringify(this.state, null, 2) }</pre>
                </Grid>
                <Grid item xs={12} style={style.header}>
                    <h3>Edit your profile info</h3>
                </Grid>

                {/*================== BASIC CONTACT DETAILS ==================================== */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth type="text" name='firstName' label="Firstname"
                        defaultValue={this.props.loggedInUserInfo.firstName}
                        onChange={this.onInputChange}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='lastName' label="Lastname"
                        defaultValue={this.props.loggedInUserInfo.lastName}
                        onChange={this.onInputChange}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='username' label="Username"
                        defaultValue={this.props.loggedInUserInfo.username}
                        onChange={this.onInputChange}
                    /><br/>
                </Grid>

                 {/*============================================================================ */}

                {/*================== CONTACT DETAILS ==================================== */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth type="text" name='about' label="Tell us more about you"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.about}
                        onChange={this.onInputChangeContact}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='email' label="Email"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.email}
                        onChange={this.onInputChangeContact}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='website' label="Website"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.website}
                        onChange={this.onInputChangeContact}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='phone' label="Phone"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.phone}
                        onChange={this.onInputChangeContact}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='address' label="Address"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.address}
                        onChange={this.onInputChangeContact}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='city' label="City"
                        defaultValue={this.props.contact.contactInfo && this.props.contact.contactInfo.city}
                        onChange={this.onInputChangeContact}
                    /><br/>


                </Grid>

                {/*============================================================================ */}


                {/* ============= WORK EXPERIENCE ================================================*/}
                <Grid item xs={12}>
                    <h4>Work Experience</h4>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddWorkExp}>
                        <Add/>
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <AddWorkExp
                        handleWorkExpChange={this.onChangeW}
                        userWorkExperienceInfoList={this.state.userWorkExperienceInfoList}
                    />
                </Grid>
                {/* ==================================================================*/}


                {/* ============= EDUCATION =======================================*/}

                <Grid item xs={12}>
                    <h4>Education</h4>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddEducation}>
                        <Add/>
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <AddEducation
                        userEducationInfoList={this.state.userEducationInfoList}
                        handleEducationChange={this.onChangeE}
                    />
                </Grid>
                {/* ==================================================================*/}

                <Grid item xs={12} style={style.buttons}>
                    <Button onClick={this.onSaveEdit} color='secondary'>Save</Button>
                    <Button onClick={this.onCloseEdit}>Close</Button>
                </Grid>

            </Grid>

        );

    }
}



const mapDispatchToProps = (dispatch) => ({
    onSave: (user) => dispatch(simpleUserActions.saveNewDetails(user)),
    onClose: () => dispatch(simpleUserActions.onCloseEdit()),
});
const mapStateToProps = (state) => ({
    // allSkillsList: state.jobsR.allSkills,
    loggedInUserInfo: state.auth.loggedInUserInfo,
    contact: state.simpleUserR.contact,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(EditSimpleUser);

export default withConnect;