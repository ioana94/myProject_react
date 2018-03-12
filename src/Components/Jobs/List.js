import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Moment from 'react-moment';
import Typography from 'material-ui/Typography';


import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import * as jobsActions from "../../Actions/jobsActions";


const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: 10,

    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

function  JobsList(props){
    const {classes} = props;

    const changePage = (id, comp) => {
        props.changePage(id, comp);
    }
    return(

        <div className={classes.root}>
            {props.jobs.map(n => {
                return (
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title}>
                                <Moment format="DD MMM YYYY" date={n.createdAt}/>
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {n.name}
                            </Typography><br/>
                            {/*<Typography className={classes.pos}>adjective</Typography>*/}
                            <Typography component="p">
                                {n.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/job/${n.id}`}>
                                <Button size="small" onClick={()=>changePage(n.id, n.companyId)}>Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                );})}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    changePage: (id, comp) => dispatch(jobsActions.onChangePage(id, comp)),
});
const mapStateToProps = (state) => ({
    jobs: state.jobsR.jobsList,
    //open: state.usersR.openEdit,
});

JobsList.propTypes = {
    classes: PropTypes.object.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(JobsList));

export default withConnect;