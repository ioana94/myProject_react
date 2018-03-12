import React from 'react';

import ApplyToJob from "../../Components/S_UserProfile/ApplyToJob";
import Benefits from '../../Components/Jobs/Benefits';
import Button from 'material-ui/Button';
import CompaniesInfo from '../../Components/Jobs/CompanyInfosInJob';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Requirements from '../../Components/Jobs/Requirements';
import Skills from '../../Components/Jobs/Skills';

import {connect} from "react-redux";
import * as jobsActions from "../../Actions/jobsActions";
import * as companyUserActions from "../../Actions/companyUserActions";


class JobDetails extends React.Component{

    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        console.log('THE ID', id);

        this.props.getJobsDetails(id);
        this.props.getUserJobApplication(localStorage.getItem('USER_ID'), id);
        this.props.getRequirements(id);
        this.props.getBenefits(id);
        this.props.getSkills(id);
        this.props.getUsersWhoApplied(id);

        this.props.getAllSkills();
        this.props.getCompanyDetails(localStorage.getItem('COMPANY_ID'));

    }

    render() {
        const style = {
            header:{
                paddingBottom:10,
            },
            description: {
               paddingTop: 20,
                height: 70,
               display: 'flex',
               alignItems: 'middle',
                justifyContent: 'center',
           },
            smallText: {
                display: 'flex',
                justifyContent: 'flex-end',
                fontStyle: 'italic',
                fontSize: 'small',
            }
        };

        const onOpenApply = () =>{
            this.props.onOpenApply();
        }

        return (
            <div>
                <div style={style.header}>
                    <h1>{this.props.jobDetails && this.props.jobDetails.name}</h1>
                    {(localStorage.getItem('USER_ROLE') == 3)?
                    <div>
                        {this.props.hasApplied == false ?
                            <Button color='secondary' onClick={onOpenApply}>Apply</Button>
                            : <Button variant="raised" color="secondary" disabled={true}>Applied</Button>
                        }
                    </div>
                        :
                        <div style={style.smallText}>
                            {this.props.usersWhoApplied.length}
                                {(this.props.usersWhoApplied.length === 1 )?
                                    <span>&nbsp;user&nbsp;</span>:
                                    <span>&nbsp;users&nbsp;</span>}applied for this job</div>
                    }
                </div>
                <Divider/>

                <Grid container>
                    <Grid item xs={12} style={style.description}>
                        <div><i>{this.props.jobDetails && this.props.jobDetails.description}</i></div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Requirements/>
                            </Grid>
                            <Grid item xs={12}>
                                <Benefits/>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Skills/>
                            </Grid>
                            <Grid item xs={12}>
                                <CompaniesInfo/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
                    <ApplyToJob/>
                </Dialog>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getJobsDetails: (id) => dispatch(jobsActions.getJobsDetails(id)),
    getUserJobApplication: (id, v) => dispatch(jobsActions.getUserJobApplication(id, v)),
    getUsersWhoApplied: (id) => dispatch(jobsActions.getUsersWhoApplied(id)),
    onOpenApply: () => dispatch(jobsActions.onOpenApply()),

    getRequirements: (id) => dispatch(jobsActions.getRequirements(id)),
    getBenefits: (id) => dispatch(jobsActions.getBenefits(id)),
    getSkills: (id )=> dispatch(jobsActions.getSkills(id)),

    getAllSkills: ()=> dispatch(jobsActions.getAllSkills()),
    getCompanyDetails: (id) => dispatch(companyUserActions.getCompanyDetails(id)),
});

const mapStateToProps = (state) => ({
    jobDetails: state.jobsR.jobDetails,
    userJobApp: state.jobsR.userJobApplications,
    usersWhoApplied: state.jobsR.usersWhoApplied,
    open: state.jobsR.openApply,
    hasApplied: state.jobsR.hasApplied,

    companyDetails: state.companyUserR.companyDetails,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobDetails);

export default withConnect;
