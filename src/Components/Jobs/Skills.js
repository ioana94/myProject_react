import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Add from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Close from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Paper from 'material-ui/Paper';
import Select from 'material-ui/Select';
import TextField  from 'material-ui/TextField';
import Typography from 'material-ui/Typography';


import {connect} from "react-redux";
import * as jobsActions from "../../Actions/jobsActions";

const styles = theme => ({
    root:
        theme.mixins.gutters({
            paddingTop: 16,
            paddingBottom: 16,
            // marginTop: theme.spacing.unit * 3,
            display: 'flex',
            flexDirection: 'column',
        }),
    crud: {
        display: 'flex',
        //flexDirection: 'reverse-row',
        justifyContent: 'space-between',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        //width: 200,
    },
    addItem: {
        display: 'flex',
        //flexDirection: 'reverse-row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chip: {
        margin: 5,
    },

});

function Skills(props) {
    const { classes } = props;
    const skill = {
        skillId: '',
        jobId: JSON.parse(localStorage.getItem('JOB_ID')),
        rating: 3,

    }

    const onOpenEdit = () => {
        props.onOpenEdit();
        console.log(props.allSkills);
    };

    const onCloseEdit = () => {
        props.onCloseEdit();
    };
    const onAddSkill = () => {
        console.log(skill);
        props.onAddSkill(skill);
    };
    const onDeleteSkill = (id) => {
        props.onDeleteSkill(id);
    };


    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3" color="secondary" className={classes.crud}>
                    <div >Skills</div>
                    {(localStorage.getItem('USER_ROLE') == 2 && localStorage.getItem('USER_ID') == localStorage.getItem('COMPANY_USER_ID'))?
                        <div>
                            <div hidden={!props.hide}>
                                <IconButton color='secondary' onClick={onOpenEdit}>
                                    <ModeEdit />
                                </IconButton>
                            </div>
                            <div hidden={props.hide}>
                                <IconButton color='secondary' onClick={onCloseEdit}>
                                    <Close />
                                </IconButton>
                            </div>
                        </div>
                        :null}
                </Typography>
                <div hidden={!props.hide}>
                    {props.skills.map(n=>{
                        return(
                            <Typography component="p" key={n.id}>
                                {n.skillInfo.name}
                            </Typography>
                        );
                    })}
                </div>

                <div hidden={props.hide}>
                    <div className={classes.addItem}>
                        <IconButton color='default' onClick={onAddSkill}>
                            <Add />
                        </IconButton>
                        <Select
                            native
                            fullWidth
                            // value={this.state.age}
                            onChange={(e) => {skill.skillId = JSON.parse(e.target.value); console.log(skill.skillId)}}
                        >
                            <option value="" />
                            {props.allSkills.map(n=>{
                                return (
                                    <option key={n.id} value={n.id}>{n.name}</option>
                                );
                            })}
                        </Select>
                    </div>
                    <div>
                        {props.skills.map(n=>{
                            return(
                                <div>
                                    <Chip
                                        key={n.id}
                                        avatar={<IconButton color="default" onClick={() => onDeleteSkill(n.id)}><Close/></IconButton>}
                                        label={n.skillInfo.name}
                                        className={classes.chip}
                                    />
                                    <br/>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </Paper>
        </div>

    );
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onOpenEdit: () => dispatch(jobsActions.onOpenEditSkills()),
    onCloseEdit: () => dispatch(jobsActions.onCloseEditSkills()),
    onAddSkill: (r) => dispatch(jobsActions.onAddSkill(r)),
    onDeleteSkill: (id) => dispatch(jobsActions.onDeleteSkill(id)),

});
const mapStateToProps = (state) => ({
    skills: state.jobsR.skills,
    hide: state.jobsR.hideSkillsEdit,
    allSkills: state.jobsR.allSkills,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Skills));

export default withConnect;