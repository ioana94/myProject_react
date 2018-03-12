import React from 'react';

import JobsList from '../../Components/C_UserProfile/JobsList';
import CompaniesInfo from '../../Components/C_UserProfile/CompaniesInfo';
import {connect} from "react-redux";
import * as companyUserActions from "../../Actions/companyUserActions";


class CompanyDetails extends React.Component{

    componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        console.log('THE ID', id);

        this.props.getCompanyDetails(id);
        this.props.getJobsList(id);
    }

    render() {

        const style = {
            paper: {
                margin: 10,
                display: 'flex',
                padding: 20,
                flexDirection: 'column',
                //justifyContent: 'flex-end',
            },
            card: {
                minWidth: 275,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                marginBottom: 16,
                fontSize: 14,

            },
            pos: {
                marginBottom: 12,

            }
        };


        return (
            <div>
                <CompaniesInfo/>
                <br/>
                <JobsList/>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCompanyDetails: (id) => dispatch(companyUserActions.getCompanyDetails(id)),
    getJobsList: (id) => dispatch(companyUserActions.getJobsList(id)),
});

const mapStateToProps = (state) => ({
    companyDetails: state.companyUserR.companyDetails,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);

export default withConnect;