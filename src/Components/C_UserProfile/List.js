import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Delete from 'material-ui-icons/Delete';
import Dialog from 'material-ui/Dialog';
import EditUserCompany from "../../Components/C_UserProfile/Edit";
import IconButton from 'material-ui/IconButton';
import InfoOutline from 'material-ui-icons/InfoOutline';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


import {connect} from "react-redux";

import * as companyUserActions from "../../Actions/companyUserActions";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    card: {
        maxWidth: 500,
    },
    media: {
        height: 200,
    },
});


function CompanyUserList(props) {
    const {classes} = props;


    const onDelete = (id) => {
        props.onDelete(id);
    }

    const changePage = (id, uId) => {
        props.changePage(id, uId);
    }

    return (
        <div>
            <Grid container className={classes.root}>
                {props.companies.map (n => {
                    return (
                        <Grid item   xs={12} sm={4} lg={3} key={n.id}>
                            <div>
                                <Card className={classes.card}>
                                    {(n.contactInfo) ?
                                        <CardMedia
                                            className={classes.media}
                                            //image={`/images/logo${n.id}.jpg`}
                                            image={n.contactInfo.avatarUrl}

                                            title="Contemplative Reptile"
                                        /> :
                                        <CardMedia
                                            className={classes.media}
                                            image={`/images/logo${n.id}.jpg`}
                                            title="Contemplative Reptile"
                                        />
                                    }

                                    <CardContent>
                                        <Typography variant="headline" component="h2">
                                            {n.name}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>

                                            <IconButton color="secondary" onClick={()=>changePage(n.id, n.userId)} >
                                                <InfoOutline />
                                            </IconButton>


                                        <IconButton  color='default' onClick={()=>onDelete(n.id)}>
                                            <Delete/>
                                        </IconButton>

                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    );})}
            </Grid>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <EditUserCompany/>
            </Dialog>
        </div>
    );

}


const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(companyUserActions.onDeleteInit(id)),
    changePage: (id, uId) => dispatch(companyUserActions.onChangePage(id, uId)),
});
const mapStateToProps = (state) => ({
    companies: state.companyUserR.companyUserList,
    open: state.companyUserR.openEdit,
});

CompanyUserList.propTypes = {
    classes: PropTypes.object.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CompanyUserList));

export default withConnect;