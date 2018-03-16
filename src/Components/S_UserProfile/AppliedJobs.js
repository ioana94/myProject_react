import React from 'react';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


import {connect} from "react-redux";
import * as simpleUserActions from "../../Actions/simpleUserActions";

function AppliedJobs (props) {
    const style = {
        root: {
            padding: 10,
        },
        card: {
            minWidth: 275,
            marginTop: 5,
        },
        title: {
            marginBottom: 16,
            fontSize: 14,
            color: 'secondary',
            fontWeight: 'bold',
        },
        pos: {
            marginBottom: 12,
            color: 'secondary',
            fontSize: 'small',
        },
        accepted:{
            padding: 5,
            backgroundColor: '#DCEDC8',
        },
        notAccepted: {
            padding: 5,
            backgroundColor: '#FFCCBC',
        }

    }

    const changePage = (id) => {
        props.changePage(id);
    }
    return (
        <Paper style={style.root}>
            <h2>My applications</h2>
            {props.applied.map(n=>{
                return(
                    <Card style={style.card} onClick={() => changePage(n.jobId)}>

                        <CardContent>
                            <Typography style={style.title}>{n.jobInfo.name}</Typography>
                            <Typography style={style.pos}>{n.jobInfo.description}</Typography>
                            {(n.isAccepted == true) ?
                                <Typography style={style.accepted}>Accepted! You will be scheduled for an interview soon!</Typography>:
                                <Typography style={style.notAccepted}>Your application haven't been visualized yet.</Typography>
                            }

                        </CardContent>
                    </Card>
                );
            })}
        </Paper>
    );
}


const mapDispatchToProps = (dispatch) => ({
    changePage: (id) => dispatch(simpleUserActions.changePage(id)),


});

const mapStateToProps = (state) => ({
    applied: state.simpleUserR.appliedJobs,

});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(AppliedJobs);

export default withConnect;