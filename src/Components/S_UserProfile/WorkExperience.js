import React from 'react';


import AddCircle from 'material-ui-icons/AddCircle';
import Close from 'material-ui-icons/Close';
import Edit from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Moment from 'react-moment';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import {connect} from "react-redux";
import * as simpleUserActions from "../../Actions/simpleUserActions";

function WorkExperience (props) {
    const style = {
        root: {
            paddingLeft: 10,
            paddingBottom: 10,
        },
        header: {
            paddingTop: 5,
            display: 'flex',
            alignItems: 'center',
        },
        tableDescr:{
            color: 'secondary',
            fontSize: 'small',
            fontStyle: 'italic',
            paddingRight: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

        },
        companyTitle:{
            fontWeight: 'bold',
        },
        editButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    };

    const onOpenAdd = () => {
        props.onOpenAdd();
    }

    const onCloseAdd = () => {
        props.onCloseAdd();
    }

    return (

        <Paper style={style.root}>
            <div style={style.header}>
                <h2>Work Experience</h2>
                {/*<div hidden={!props.hide}>*/}
                    {/*<div hidden={props.open}>*/}
                        {/*<IconButton color="secondary" onClick={() => onOpenAdd()}>*/}
                            {/*<AddCircle/>*/}
                        {/*</IconButton>*/}
                    {/*</div>*/}
                    {/*<div hidden={!props.open}>*/}
                        {/*<IconButton color="secondary" onClick={() => onCloseAdd()}>*/}
                            {/*<Close/>*/}
                        {/*</IconButton>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>

            {/*<div hidden={!props.open}>*/}
                {/*<TextField*/}
                    {/*type="text"*/}
                    {/*name="newWExp"*/}
                    {/*label="New Work Experience"*/}
                    {/*style={style.textField}*/}
                    {/*//onChange={(e) => {props.companyToUpdate.contactInfo.email = e.target.value; console.log(props.companyToUpdate.contactInfo.email)}}*/}
                {/*/>*/}
            {/*</div>*/}
            <br/>
            {/* ================= NORMAL SHOWING OF DETAILS ======================*/}
            <div>
                {props.workexp.map(n=> {
                    return(
                        <div key={n.id}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <Grid container>
                                        <Grid item xs={12} style={style.tableDescr}><Moment format="MMM-YYYY" date={n.startDate}/> -<br/> <Moment format="MMM-YYYY" date={n.endDate}/></Grid>
                                        {/*<Grid item xs={9} style={style.companyTitle}>{n.institution}</Grid>*/}
                                    </Grid>
                                </Grid>
                                <Grid item xs={11}>
                                    <Grid container>
                                        <Grid item xs={12} style={style.companyTitle} >{n.institution}</Grid>
                                        <Grid item xs={12} >{n.description}</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    );
                })}
            </div>
            {/* ================= EDIT MODE SHOWING OF DETAILS ======================*/}
            {/*<div hidden={!props.hide}>*/}
                {/*{props.workexp.map(n=> {*/}
                    {/*return(*/}
                        {/*<div key={n.id}>*/}
                            {/*<Grid container>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<Grid container>*/}
                                        {/*<Grid item xs={12} style={style.editButton}>*/}
                                            {/*<IconButton color="default"*/}
                                                {/*// onClick={() => onDeleteSkill(n.id)}*/}
                                            {/*>*/}
                                                {/*<Edit/>*/}
                                            {/*</IconButton> </Grid>*/}
                                    {/*</Grid>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<Grid container>*/}
                                        {/*<Grid item xs={12} style={style.tableDescr}><Moment format="MMM-YYYY" date={n.startDate}/> -<br/> <Moment format="MMM-YYYY" date={n.endDate}/></Grid>*/}
                                    {/*</Grid>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={10}>*/}
                                    {/*<Grid container>*/}
                                        {/*<Grid item xs={12} style={style.companyTitle} >{n.institution}</Grid>*/}
                                        {/*<Grid item xs={12} >{n.description}</Grid>*/}
                                    {/*</Grid>*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        {/*</div>*/}
                    {/*);*/}
                {/*})}*/}
            {/*</div>*/}
        </Paper>
    );
}

const mapStateToProps = (state) => ({
    workexp: state.simpleUserR.workExperience,
    // hide: state.simpleUserR.hideEdit,
    // open: state.simpleUserR.openAddWExp,
});

const mapDispatchToProps = (dispatch) => ({
    // onOpenAdd: () => dispatch(simpleUserActions.onOpenAddWExp()),
    // onCloseAdd: () => dispatch(simpleUserActions.onCloseAddWExp()),

});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(WorkExperience);

export default withConnect;
