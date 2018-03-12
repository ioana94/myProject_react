import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";

function CreateJob (props) {

    let job = {
        name: '',
        description: '',
        companyId: localStorage.getItem('COMPANY_ID'),
        jobBenefitInfoList: [],
        jobRequirementInfoList: [],

    };

    const aux = {
        nameR: '',
        nameB: '',
    };

    const style = {
        root: {
            padding: 10,
        }
    };


    const addToReqList = () => {
        job.jobRequirementInfoList.push({name: aux.nameR});
    };
    const addToBnfList = () => {
        job.jobBenefitInfoList.push({name: aux.nameB});
    };



    const onCloseAddJob = () => {
        props.closeAddJob();
        //console.log(job);
    };

    const createJob = () => {
        props.createJob(job);
        onCloseAddJob();
    }

    return (
        <Grid container style={style.root}>
            <Grid item xs={12}>
                <h3>Create New Job</h3>
                <TextField
                    fullWidth type="text" id = 'jobTitle' label="Job Title"
                    onChange={(e)=>{job.name=e.target.value; console.log(job.name);}}
                /><br/>
                <TextField
                    fullWidth type="text" id = 'jobDescr' label="Description"
                    onChange={(e)=>{job.description=e.target.value; console.log(job.description);}}
                /><br/>
                <h4>Requirements</h4>
            </Grid>
            <Grid item xs={11}>
                <TextField
                    fullWidth type="text" name = 'require' id = 'require' label="Add Requirement"
                    onChange={(e)=>{aux.nameR=e.target.value; console.log(aux.nameR);}}
                /><br/>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={addToReqList}>
                    <Add/>
                </IconButton>
            </Grid>

            {/*<Grid item={12}>*/}

            {/*<div id='requirementsDiv'>b</div>*/}

            {/*</Grid>*/}

            <Grid item xs={12}>
                <h4>Benefits</h4>
            </Grid>
            <Grid item xs={11}>
                <TextField fullWidth type="text" id = 'benef' label="Add Benefit"
                           onChange={(e)=>{aux.nameB=e.target.value; console.log(aux.nameB);}}
                /><br/>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={addToBnfList}>
                    <Add/>
                </IconButton>
            </Grid>

            <Grid item xs={12}>
                <Button color='secondary' onClick={createJob}>Create</Button>
                <Button color='secondary' onClick={onCloseAddJob}>Close</Button>
            </Grid>

        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    closeAddJob: () => dispatch(jobsActions.closeAddJob()),
    createJob: (job) => dispatch(jobsActions.createJob(job)),
});

const withConnect = connect(null, mapDispatchToProps)(CreateJob);

export default withConnect;