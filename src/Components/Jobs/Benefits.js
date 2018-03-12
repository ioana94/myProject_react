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

function Benefits(props) {
    const { classes } = props;
    const benefit = {
        name: '',
        jobId: JSON.parse(localStorage.getItem('JOB_ID')),
    }

    const onOpenEdit = () => {
        props.onOpenEdit();
    };

    const onCloseEdit = () => {
        props.onCloseEdit();
    };
    const onAddBenefit = () => {
        props.onAddBenefit(benefit);
    };
    const onDeleteBenefit = (id) => {
        props.onDeleteBenefit(id);
    };


    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3" color="secondary" className={classes.crud}>
                    <div >Benefits</div>
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
                    {props.benefits.map(n=>{
                        return(
                            <Typography component="p" key={n.id}>
                                {n.name}
                            </Typography>
                        );
                    })}
                </div>

                <div hidden={props.hide}>
                    <div className={classes.addItem}>
                        <IconButton color='default' onClick={onAddBenefit}>
                            <Add />
                        </IconButton>
                        <TextField
                            fullWidth
                            label="Add Benefit"
                            className={classes.textField}
                            onChange={(e) => {benefit.name = e.target.value; console.log(benefit.name)}}
                            margin="normal"
                        />

                    </div>
                    <div>
                        {props.benefits.map(n=>{
                            return(
                                <div>
                                    <Chip
                                        key={n.id}
                                        avatar={<IconButton color="default" onClick={() => onDeleteBenefit(n.id)}><Close/></IconButton>}
                                        label={n.name}
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

Benefits.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onOpenEdit: () => dispatch(jobsActions.onOpenEditBenefits()),
    onCloseEdit: () => dispatch(jobsActions.onCloseEditBenefits()),
    onAddBenefit: (r) => dispatch(jobsActions.onAddBenefit(r)),
    onDeleteBenefit: (id) => dispatch(jobsActions.onDeleteBenefit(id)),


});
const mapStateToProps = (state) => ({
    benefits: state.jobsR.benefits,
    hide: state.jobsR.hideBenefitsEdit,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Benefits));

export default withConnect;