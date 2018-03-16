import React from 'react';

import Switch from 'material-ui/Switch';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';

import * as companyUserActions from "../../Actions/companyUserActions";
import {connect} from "react-redux";

class MyApplications extends React.Component {


    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        console.log('THE ID', id);

        this.props.getUsersApplications(id);
    }

    onChangeAccept = (jobId, userId, appId, isAccepted) => {
        this.props.onChangeAccept(jobId, userId, appId, isAccepted);
    }

    changePage=(id)=>{
        this.props.changePage(id);
    }

    render() {

        const style = {
            card: {
                padding:10,
                // display:'flex',
                // flexDirection: 'column',
            },
            userDetails: {
                fontWeight: 'bold',
            }
        }

        return(
            <div>
                <h1>Job's app</h1>
                {this.props.applications == '' ?
                    <div>There are no applications for this job!</div> :
                    <div>
                    {this.props.applications.map(n => {
                        return (
                            <Card style={style.card} key={n.id}>
                                <div style={style.userDetails}>{n.userInfo.firstName} {n.userInfo.lastName}</div>
                                <Switch
                                    checked={n.isAccepted}
                                    onChange={() => {
                                        this.onChangeAccept(n.jobId, n.userId, n.id, n.isAccepted)
                                    }}
                                />
                                <br/>
                                <Button onClick={() => {
                                    this.changePage(n.userId)
                                }}>see user</Button>
                            </Card>
                        );
                    })}
                    </div>
                }

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUsersApplications: (id) => dispatch(companyUserActions.getUsersApplications(id)),
    onChangeAccept: (jobId, userId, appId, isAccepted) => dispatch(companyUserActions.onChangeAccept(jobId, userId, appId, isAccepted)),
    changePage: (id) => dispatch(companyUserActions.changePageToUser(id)),
});

const mapStateToProps = (state) => ({
    applications: state.companyUserR.usersAppForAJob,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(MyApplications);

export default withConnect;