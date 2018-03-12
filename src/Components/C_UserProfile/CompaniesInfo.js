import React from 'react';

import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import Dialog from 'material-ui/Dialog';
import EditUserCompany from "../../Components/C_UserProfile/Edit";
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';


import {connect} from "react-redux";
import * as companyUserActions from "../../Actions/companyUserActions";
import * as jobsActions from "../../Actions/jobsActions";
import CreateJob from "../Jobs/Create";


function CompaniesInfo (props){

    const style ={
        root:{
            display: 'flex',
        },
        crud: {
            display: 'flex',
            flexDirection: 'column',
            width: 50,
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        small: {
          fontSize: 'small',
        },
    }

    const onOpenEdit = (value) => {
        props.onOpenEdit(value);
    }

    const openAddJob = () => {
        props.openAddJob();
    }

    return (
        <div style={style.root}>
            {((localStorage.getItem('USER_ROLE') == 2) && (localStorage.getItem('USER_ID')==localStorage.getItem('COMPANY_USER_ID')))?
            <div style={style.crud}>
                <IconButton color='secondary' onClick={()=>onOpenEdit(props.companyDetails)}>
                    <ModeEdit />
                </IconButton>
                <IconButton color='secondary' onClick={openAddJob}>
                    <AddCircleOutline />
                </IconButton>
                <Dialog open={props.openAdd}>
                    <CreateJob/>
                </Dialog>
            </div>
                :null}
            <div style={style.content}>
                <h1> {props.companyDetails && props.companyDetails.name} </h1>
                {(props.companyDetails) ?
                    ((props.companyDetails.contactInfo)?
                        <div><i>{props.companyDetails.contactInfo.about}</i></div>:null)
                    :null
                }
                <br/>
                {props.companyDetails ?
                    ((props.companyDetails.contactInfo) ?
                        <img src={props.companyDetails.contactInfo.avatarUrl} width="150"/>:null)
                    :null}
                <br/>
                {(props.companyDetails) ?
                    ((props.companyDetails.contactInfo)?
                        <div>{props.companyDetails.contactInfo.city}</div>:null)
                    :null
                }
                {(props.companyDetails) ?
                    ((props.companyDetails.contactInfo)?
                        <div>{props.companyDetails.contactInfo.email}</div>:null)
                    :null
                }
                {(props.companyDetails) ?
                    ((props.companyDetails.contactInfo)?
                        <div>{props.companyDetails.contactInfo.phone}</div>:null)
                    :null
                }
                {(props.companyDetails) ?
                    ((props.companyDetails.contactInfo)?
                        <div>{props.companyDetails.contactInfo.address}</div>:null)
                    :null
                }

                {props.companyDetails ?
                    ((props.companyDetails.contactInfo)?
                        <div style={style.small}><a href={props.companyDetails.contactInfo.website}>{props.companyDetails.contactInfo.website}</a></div>:null)
                    :null}

            </div>
            <Dialog open={props.openEdit} aria-labelledby="form-dialog-title">
                <EditUserCompany/>
            </Dialog>

        </div>
    );
}


const mapStateToProps = (state) => ({
    companyDetails: state.companyUserR.companyDetails,
    openEdit: state.companyUserR.openEdit,
    openAdd: state.jobsR.openAddJob,
});

const mapDispatchToProps = (dispatch) => ({
    onOpenEdit: (value) => dispatch(companyUserActions.onOpenEdit(value)),
    openAddJob: () => dispatch(jobsActions.openAddJob()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompaniesInfo);

export default withConnect;


