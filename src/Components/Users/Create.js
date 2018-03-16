import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import * as usersActions from "../../Actions/usersActions";
import {connect} from "react-redux";

class CreateUser extends React.Component{

    state = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        confPassword: '',
        userRoleId: '',
        // userWorkExperienceInfoList: [],
        // userEducationInfoList: [],
    };

    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    // ================ ADD WORK EXPERIENCE ==========================

    handleWorkExperienceNameChange = (idx) => (evt) => {
        const newJobExperience = this.state.userWorkExperienceInfoList.map((n, sidx) => {
            if (idx !== sidx) return n;
            return { ...this.state.userWorkExperienceInfoList, institution: evt.target.value };
        });

        this.setState({ userWorkExperienceInfoList: newJobExperience });
    };

    handleAddWorkExperience = () => {
        this.setState({
            userWorkExperienceInfoList: this.state.userWorkExperienceInfoList.concat([{ institution: '' }])
        });
    };

    // ================ ADD EDUCATION ==========================

    handleEducationNameChange = (idx) => (evt) => {
        const newJobEducation = this.state.userEducationInfoList.map((n, sidx) => {
            if (idx !== sidx) return n;
            return { ...this.state.userEducationInfoList, institution: evt.target.value };
        });

        this.setState({ userEducationInfoList: newJobEducation });
    };

    handleAddEducation = () => {
        this.setState({
            userEducationInfoList: this.state.userEducationInfoList.concat([{ institution: '' }])
        });
    };

    onCreateSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confPassword) {
            this.props.initCreateUser(this.state);
            console.log(this.state);
        }
        else {
            alert("parolele nu se potrivesc");
        }
    }

    exitCreate = () => {
        this.props.exitCreate();
    }


    render () {
        const style = {
            root: {
                 display: 'flex',
                // width: 300,
                flexDirection: 'column',
                margin: 'auto',
            },
            header: {
                color: 'secondary',
                fontColor: '#ffffff',
                alignSelf: 'center',
                // width: 300,
            },
            form: {
                display: 'flex',
                alignSelf: 'center',
                // width: 300,
                padding: 10,
            },
            button: {
                display: 'flex',
                justifyContent: 'space-between',
            },
            select: {
                display: 'flex',
                justifyContent: 'center',
            },

        };


        return (

            <Grid container style={style.root}>
                {/*<Grid item xs={12} style={style.header}>*/}
                    {/*<pre>{ JSON.stringify(this.state, null, 2) }</pre>s*/}
                {/*</Grid>*/}

                <Grid item xs={12} style={style.header}>
                    <h2>Create New User</h2>
                </Grid>

                <Grid item xs={12} style={style.form}>
                    <form onSubmit={this.onCreateSubmit}>
                        <div style={style.select}>
                            <Select name='userRoleId'
                                    native={true}
                                    onChange={this.onInputChange}
                            >
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
                                autoFocus={true}
                                name="username"
                                label="Username"
                                variant="username"
                                onChange={this.onInputChange}
                            />
                            <TextField
                                fullWidth
                                name="firstName"
                                label="Firstname"
                                variant="firstName"
                                onChange={this.onInputChange}
                            />
                            <TextField
                                fullWidth
                                name="lastName"
                                label="Lastname"
                                variant="lastName"
                                onChange={this.onInputChange}
                            />
                            <TextField
                                fullWidth
                                type="password"
                                name="password"
                                label="Password"
                                variant="password"
                                margin="normal"
                                onChange={this.onInputChange}
                            />
                            <TextField
                                fullWidth
                                type="password"
                                name="confPassword"
                                label="Confirm Password"
                                variant="password"
                                margin="normal"
                                onChange={this.onInputChange}
                            />
                        </div>
                        {/*{(this.state.userRoleId == 3) ?*/}
                            {/*<div >*/}
                                {/*<Grid item xs={12}>*/}
                                    {/*<h4>Requirements</h4>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={11}>*/}
                                    {/*{this.state.userWorkExperienceInfoList.map((n, idx) => (*/}
                                        {/*<TextField*/}
                                            {/*fullWidth*/}
                                            {/*type="text"*/}
                                            {/*value={n.name}*/}
                                            {/*onChange={() => this.handleWorkExperienceNameChange(idx)}*/}
                                        {/*/>*/}
                                    {/*))}*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<IconButton onClick={this.handleAddWorkExperience}>*/}
                                        {/*<Add/>*/}
                                    {/*</IconButton>*/}
                                {/*</Grid>*/}


                                {/*<Grid item xs={12}>*/}
                                    {/*<h4>Benefits</h4>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={11}>*/}
                                    {/*{this.state.userEducationInfoList.map((n, idx) => (*/}
                                        {/*<TextField*/}
                                            {/*fullWidth*/}
                                            {/*type="text"*/}
                                            {/*value={n.name}*/}
                                            {/*onChange={() => this.handleEducationNameChange(idx)}*/}
                                        {/*/>*/}
                                    {/*))}*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<IconButton onClick={this.handleAddEducation}>*/}
                                        {/*<Add/>*/}
                                    {/*</IconButton>*/}
                                {/*</Grid>*/}
                            {/*</div>*/}
                            {/*: null}*/}

                        <br/><br/>
                        <div style={style.button}>
                            <Button type="submit" color="secondary">Create</Button>
                            <Button type="button" color="primary" onClick={this.exitCreate}>Close</Button>
                        </div>

                    </form>
                </Grid>



            </Grid>
        );
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        initCreateUser: (value) => dispatch(usersActions.initCreate(value)),
        exitCreate: () => dispatch(usersActions.onExitForm()),
    };
};

const withConnect = connect(null, mapDispatchToProps)(CreateUser);

export default withConnect;


