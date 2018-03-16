import React from 'react';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";

const AddRequirement = (props) => {
    const onInputChange = (event, elemIndex) => {
        props.handleRequirementNameChange(event, elemIndex);
    };
    return (
        <div>
            {props.jobRequirementInfoList &&
            props.jobRequirementInfoList.map((n, idx) => {
                return(
                    <TextField
                        key={idx}
                        fullWidth
                        label="Add Requirement"
                        name='name'
                        type="text"
                        value={n.name}
                        //defaultValue={n.name}
                        onChange={(evt) => onInputChange(evt, idx)}
                    />
                );
            })}
        </div>
    );
};

const AddBenefit = (props) => {
    const onInputChange = (event, elemIndex) => {
        props.handleBenefitNameChange(event, elemIndex);
    };
    return (
        <div>
            {props.jobBenefitInfoList &&
            props.jobBenefitInfoList.map((n, idx) => {
                return(
                    <TextField
                        key={idx}
                        fullWidth
                        label="Add Benefit"
                        name='name'
                        type="text"
                        value={n.name}
                        //defaultValue={n.name}
                        onChange={(evt) => onInputChange(evt, idx)}
                    />
                );
            })}
        </div>
    );
};

// const AddSkill = (props) => {
//     const onInputChange = (event, elemIndex) => {
//         props.handleSkillSelect(event, elemIndex);
//     };
//     return (
//         <div>
//             <Select native={true}  onChange={(evt) => onInputChange(evt, idx)}>
//             {props.jobSkillsInfoList &&
//             props.jobSkillsInfoList.map((n, idx) => {
//                 return(
//                     <TextField
//                         key={idx}
//                         fullWidth
//                         label="Add Benefit"
//                         name='name'
//                         type="text"
//                         value={n.name}
//                         //defaultValue={n.name}
//                         onChange={(evt) => onInputChange(evt, idx)}
//                     />
//                 );
//             })}
//             </Select>
//         </div>
//     );
// };


class CreateJob extends React.Component {

    state =  {
        name: '',
        description: '',
        companyId: localStorage.getItem('COMPANY_ID'),
        jobBenefitInfoList: [],
        jobRequirementInfoList: [],
        jobSkillInfoList: [],

    };


    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    // =========== ADD REQUIREMENTS ==========================
    handleAddRequirement = () => {
        this.setState((prevState) =>({
            jobRequirementInfoList: prevState.jobRequirementInfoList.concat({}),
        }))
    };

    onChangeR = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const jobRequirementInfoList = [...this.state.jobRequirementInfoList];

        const elementToChange = jobRequirementInfoList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ jobRequirementInfoList });
    };

    // =========== ADD BENEFITS ==========================
    handleAddBenefit = () => {
        this.setState((prevState) =>({
            jobBenefitInfoList: prevState.jobBenefitInfoList.concat({}),
        }))
    };

    onChangeB = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const jobBenefitInfoList = [...this.state.jobBenefitInfoList];

        const elementToChange = jobBenefitInfoList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ jobBenefitInfoList });
    };

    //=========== FINISH CREATING JOB ====================
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
                {/*<Grid item xs={12} style={style.header}>*/}
                    {/*<pre>{ JSON.stringify(this.state, null, 2) }</pre>*/}
                {/*</Grid>*/}
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

                {/*======================= ADD REQUIREMENTS =========================*/}
                <Grid item xs={12}>
                    <h4>Requirements</h4>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddRequirement}>
                        <Add/>
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <AddRequirement
                        handleRequirementNameChange={this.onChangeR}
                        jobRequirementInfoList={this.state.jobRequirementInfoList}
                    />
                </Grid>
                {/*==================================================================*/}


                {/*======================= ADD BENEFITS =============================*/}
                <Grid item xs={12}>
                    <h4>Benefits</h4>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={this.handleAddBenefit}>
                        <Add/>
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <AddBenefit
                        handleBenefitNameChange={this.onChangeB}
                        jobBenefitInfoList={this.state.jobBenefitInfoList}
                    />
                </Grid>
                {/*=================================================================*/}

                {/*======================= ADD SKILLS =============================*/}
                {/*<Grid item xs={12}>*/}
                    {/*<h4>Skills</h4>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={1}>*/}
                    {/*<IconButton onClick={this.handleAddSkill}>*/}
                        {/*<Add/>*/}
                    {/*</IconButton>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={11}>*/}
                    {/*<AddSkill*/}
                        {/*handleSkillSelect={this.onSelect}*/}
                        {/*allSkillsList={this.props.allSkillsList}*/}
                        {/*jobSkillsInfoList={this.state.jobSkillInfoList}*/}
                    {/*/>*/}
                {/*</Grid>*/}
                {/*=================================================================*/}

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
const mapStateToProps = (state) => ({
    allSkillsList: state.jobsR.allSkills,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(CreateJob);

export default withConnect;