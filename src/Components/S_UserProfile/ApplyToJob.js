import React from 'react';


import Button from 'material-ui/Button';


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";

function ApplyToJob (props){
    const style = {
        root:{
            width: 500,
            padding: 10,
            display: 'flex',
            //flexDirection: 'column',
            alignItems: 'center',
        },
        content: {
            flexGrow: 1,
        },
        button: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: 50,
        },
    }
    const apply = {
        jobId: props.jobDetails.id,
        userId: JSON.parse(localStorage.getItem('USER_ID')),
        isAccepted: false,

    }

    const onApply =()=>{
        props.onApply(apply);
    }
    const exitApply = () => {
        props.exitApply();
    }


    return (
        <div style={style.root}>
            <div style={style.content}>
                You are about to apply to <h3>{props.jobDetails.name}</h3>
                <i>{props.jobDetails.description}</i>
            </div>
            <div style={style.button}>
                 <Button color="secondary" onClick={onApply}>Apply</Button>
                 <Button color="primary" onClick={exitApply}>Back</Button>
            </div>
        </div>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onApply: (value) => dispatch(jobsActions.onApply(value)),
        exitApply: () => dispatch(jobsActions.onExitApply()),
    };
};
const mapStateToProps = (state) => ({
    jobDetails: state.jobsR.jobDetails,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(ApplyToJob);

export default withConnect;




