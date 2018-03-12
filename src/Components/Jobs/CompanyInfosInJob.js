import React from 'react';

import {connect} from "react-redux";


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

    return (
        <div style={style.root}>
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

        </div>
    );
}


const mapStateToProps = (state) => ({
    companyDetails: state.companyUserR.companyDetails,
    open: state.companyUserR.openEdit,
});


const withConnect = connect(mapStateToProps, null)(CompaniesInfo);

export default withConnect;


