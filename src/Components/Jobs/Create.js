import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";

class CreateJob extends React.Component {

    state =  {
        name: '',
        description: '',
        companyId: localStorage.getItem('COMPANY_ID'),
        jobBenefitInfoList: [],
        jobRequirementInfoList: [],

    };


    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    // ================ ADD REQUIREMENTS ==========================

    handleRequirementNameChange = (idx) => (evt) => {
        const newJobRequirement = this.state.jobRequirementInfoList.map((n, sidx) => {
            if (idx !== sidx) return n;
            return { ...n, name: evt.target.value };
        });

        this.setState({ jobRequirementInfoList: newJobRequirement });
    };

    handleAddRequirement = () => {
        this.setState({
            jobRequirementInfoList: this.state.jobRequirementInfoList.concat([{ name: '' }])
        });
    };

    // ================ ADD BENEFITS ==========================

    handleBenefitNameChange = (idx) => (evt) => {
        const newJobRequirement = this.state.jobBenefitInfoList.map((n, sidx) => {
            if (idx !== sidx) return n;
            return {...n, name: evt.target.value};
        });

        this.setState({jobBenefitInfoList: newJobRequirement});

    };

    handleAddBenefit = () => {
        this.setState({
            jobBenefitInfoList: this.state.jobBenefitInfoList.concat([{ name: '' }])
        });
    };


    onCloseAddJob = () => {
        this.props.closeAddJob();
        console.log(this.state);
    };

    createJob = () => {
        this.props.createJob(this.state);
        this.onCloseAddJob();
    }

    render() {
        const style = {
            root: {
                padding: 10,
            },
            buttons: {
                display: 'flex',
                justifyContent: 'space-between',
            }
        };

        return (
            <Grid container style={style.root}>
                <Grid item xs={12} style={style.header}>
                    <pre>{ JSON.stringify(this.state, null, 2) }</pre>
                </Grid>
                <Grid item xs={12}>
                    <h3>Create New Job</h3>
                    <TextField
                        fullWidth type="text" name='name' label="Job Title"
                        onChange={this.onInputChange}
                    /><br/>
                    <TextField
                        fullWidth type="text" name='description' label="Description"
                        onChange={this.onInputChange}
                    /><br/>
                </Grid>
                <Grid item xs={12}>
                    <h4>Requirements</h4>
                </Grid>
                <Grid item xs={11}>
                    {this.state.jobRequirementInfoList.map((n, idx) => (
                        <TextField
                            key={idx}
                            fullWidth
                            label="Add Requirement"
                            name='requirementName'
                            type="text"
                            //value={n.name}
                            //defaultValue={n.name}
                            onChange={() => this.handleRequirementNameChange(idx)}
                        />
                    ))}
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddRequirement}>
                        <Add/>
                    </IconButton>
                </Grid>


                <Grid item xs={12}>
                    <h4>Benefits</h4>
                </Grid>
                <Grid item xs={11}>
                    {this.state.jobBenefitInfoList.map((n, idx) => (
                        <TextField
                            fullWidth
                            type="text"
                            name='benefitName'
                            label='Add benefit'
                            //defaultValue={n.name}
                            //value={n.name}
                            onChange={() => this.handleBenefitNameChange(idx)}
                        />
                    ))}
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddBenefit}>
                        <Add/>
                    </IconButton>
                </Grid>



                <Grid item xs={12} style={style.buttons}>
                    <Button color='secondary' onClick={this.createJob}>Create</Button>
                    <Button color='default' onClick={this.onCloseAddJob}>Close</Button>
                </Grid>

            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeAddJob: () => dispatch(jobsActions.closeAddJob()),
    createJob: (job) => dispatch(jobsActions.createJob(job)),
});

const withConnect = connect(null, mapDispatchToProps)(CreateJob);

export default withConnect;