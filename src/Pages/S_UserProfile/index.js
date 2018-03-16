import React from 'react';

import AppliedJobs from '../../Components/S_UserProfile/AppliedJobs';
import Button from 'material-ui/Button';
import ContactInfo from '../../Components/S_UserProfile/ContactInfo';
import Dialog from 'material-ui/Dialog';
import UserEdit from '../../Components/S_UserProfile/UserEdit';
import EditSimpleUser from '../../Components/S_UserProfile/EditSimpleUser';
import Education from '../../Components/S_UserProfile/Education';
import Grid from 'material-ui/Grid';
import Skills from '../../Components/S_UserProfile/Skills';
import WorkExperience from '../../Components/S_UserProfile/WorkExperience';

import {connect} from "react-redux";
import * as simpleUserActions from "../../Actions/simpleUserActions";




class S_UserProfile extends React.Component {

    // componentWillUpdate() {
    //     const { match } = this.props;
    //     const id = match.params.id;
    //     console.log('THE ID', id);
    //
    //     this.props.getContact(id);
    //     this.props.getSkills(id);
    //     this.props.getWorkExperience(id);
    //     this.props.getEducation(id);
    //     this.props.getAppliedJobs(id);
    //
    // }
    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        console.log('THE ID', id);

        this.props.getContact(id);
        this.props.getSkills(id);
        this.props.getWorkExperience(id);
        this.props.getEducation(id);
        this.props.getAppliedJobs(id);

    }

    render(){

        const style = {
            root: {
                paddingTop: 20,
            },
            buttons: {
                display: 'flex',
                //justifyContent: 'flex-end',
            },
            dialog:{
              width: 900,
            }
        };

        const userP = {
            username: '',
            firstName: '',
            lastName: '',
            contactInfo: [],
            userEducationInfoList: [],
            userWorkExperienceInfoList: [],

        }

        const onOpenEdit = () =>{
            this.props.onOpenEdit();
        };
        const onCloseEdit = () =>{
            this.props.onCloseEdit();
        };
        const onSaveEdit = (user) => {
            userP.username = user.username;
            userP.firstName = user.firstName;
            userP.lastName = user.lastName;
            userP.contactInfo = user.contactInfo;
            this.props.saveNewDetails(userP);
            this.props.onCloseEdit();
        }


        return (
            <div style={style.root}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={8}>
                        <Grid container>
                            {(localStorage.getItem('USER_ROLE') == 3)?

                                    <Grid item xs={12} style={style.buttons}>
                                        <div hidden={this.props.hide}>
                                            <Button color='secondary' onClick={onOpenEdit}>
                                                edit profile
                                            </Button>
                                        </div>
                                        <div hidden={!this.props.hide} >
                                            <Button color='secondary' onClick={onCloseEdit}>
                                                Save
                                            </Button>
                                        </div>
                                    </Grid>
                                :null}
                            <Grid item xs={12}>
                               <ContactInfo contact = {this.props.contact}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Skills/>
                            </Grid>
                            <Grid item xs={12}>
                                <WorkExperience/>
                            </Grid>
                            <Grid item xs={12}>
                                <Education/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {(localStorage.getItem('USER_ROLE') == 3)?
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <AppliedJobs/>
                            </Grid>
                        </Grid>
                    </Grid>:null}
                </Grid>

                {/*<Dialog open={this.props.hide}>*/}
                    {/*<UserEdit*/}
                        {/*onSave={onSaveEdit}*/}
                        {/*contact={this.props.contact}*/}
                        {/*moreContact={this.props.contactMoreInfo}*/}
                        {/*workexp={this.props.workexp}*/}
                        {/*education={this.props.education}*/}
                    {/*/>*/}
                {/*</Dialog>*/}
                <Dialog open={this.props.hide}>
                    <EditSimpleUser/>
                </Dialog>
            </div>

        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    getContact: (id) => dispatch(simpleUserActions.getContact(id)),
    getSkills: (id) => dispatch(simpleUserActions.getSkills(id)),
    getWorkExperience: (id) => dispatch(simpleUserActions.getWorkExperience(id)),
    getEducation: (id) => dispatch(simpleUserActions.getEducation(id)),
    getAppliedJobs: (id) => dispatch(simpleUserActions.getAppliedJobs(id)),

    onOpenEdit: () => dispatch(simpleUserActions.onOpenEdit()),
    onCloseEdit: () => dispatch(simpleUserActions.onCloseEdit()),

    saveNewDetails: (user) => dispatch(simpleUserActions.saveNewDetails(user)),
});

const mapStateToProps = (state) => ({
    hide: state.simpleUserR.hideEdit,
    contact: state.simpleUserR.contact,
    contactMoreInfo: state.simpleUserR.moreContactInfos,
    workexp: state.simpleUserR.workExperience,
    education: state.simpleUserR.education,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(S_UserProfile);

export default withConnect;




