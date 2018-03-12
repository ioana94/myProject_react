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
import TextField  from 'material-ui/TextField';
import Typography from 'material-ui/Typography';


import {connect} from "react-redux";
import * as companyUserActions from "../../Actions/companyUserActions";
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

function Requirements(props) {
    const { classes } = props;
    const requirement = {
        name: '',
        jobId: JSON.parse(localStorage.getItem('JOB_ID')),
    }

    const onOpenEdit = () => {
        props.onOpenEdit();
    };

    const onCloseEdit = () => {
        props.onCloseEdit();
    };
    const onAddRequirement = () => {
        props.onAddRequirement(requirement);
    };
    const onDeleteRequirement = (id) => {
        props.onDeleteRequirement(id);
    };


    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3" color="secondary" className={classes.crud}>
                    <div >Requirements</div>
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
                {props.requirements.map(n=>{
                    return(
                        <Typography component="p" key={n.id}>
                            {n.name}
                        </Typography>
                    );
                })}
                </div>

                <div hidden={props.hide}>
                    <div className={classes.addItem}>
                        <IconButton color='default' onClick={onAddRequirement}>
                            <Add />
                        </IconButton>
                        <TextField
                            fullWidth
                            label="Add requirement"
                            className={classes.textField}
                            onChange={(e) => {requirement.name = e.target.value; console.log(requirement.name)}}
                            margin="normal"
                        />

                    </div>
                    <div>
                        {props.requirements.map(n=>{
                            return(
                                <div>
                                    <Chip
                                        key={n.id}
                                        avatar={<IconButton color="default" onClick={() => onDeleteRequirement(n.id)}><Close/></IconButton>}
                                        label={n.name}
                                        // onDelete={this.handleDelete(data)}
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

Requirements.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onOpenEdit: () => dispatch(jobsActions.onOpenEditRequirements()),
    onCloseEdit: () => dispatch(jobsActions.onCloseEditRequirements()),
    onAddRequirement: (r) => dispatch(jobsActions.onAddRequirement(r)),
    onDeleteRequirement: (id) => dispatch(jobsActions.onDeleteRequirement(id)),


});
const mapStateToProps = (state) => ({
    requirements: state.jobsR.requirements,
    hide: state.jobsR.hideRequirementsEdit,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Requirements));

export default withConnect;