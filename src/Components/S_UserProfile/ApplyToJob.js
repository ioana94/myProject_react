import React from 'react';


import Button from 'material-ui/Button';


import * as jobsActions from "../../Actions/jobsActions";
import {connect} from "react-redux";

function ApplyToJob (props){
    const style = {
        root:{
            //width: 500,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        content: {
            //flexGrow: 1,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
        },
        button: {
            //flex: 1,
            display: 'flex',
            //flexDirection: 'column',
            justifyContent: 'space-between',
            //width: 50,
        },
        description:{
            //fontSize: 'small',
        },
        header:{
            fontSize: 'small',
        }
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
                <div style={style.header}>You are about to apply to</div>
                <div><h3>{props.jobDetails.name}</h3></div>
                <div style={style.description}><i>&#8220;{props.jobDetails.description}&#8221;</i></div>
            </div>

            <br/>
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




