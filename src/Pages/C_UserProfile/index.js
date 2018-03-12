import React from 'react';

import Button from 'material-ui/Button';
import CreateUserCompany from "../../Components/C_UserProfile/Create";
import Dialog from 'material-ui/Dialog';
import List from "../../Components/C_UserProfile/List"

import * as companiesUserActions from "../../Actions/companyUserActions";
import {connect} from "react-redux";

class C_UserProfile extends React.Component{

    onOpenCreate = () =>{
        this.props.onOpenCreate();
    }

    componentDidMount(){
        this.props.getUserCompanies();
    }
    render(){

        const style = {
            header: {
                display: 'flex',
                paddingTop: 20,
                //justifyContent: 'flex-end',
            },
        };

        return (
            <div >

                <div style={style.header}>
                    <Button variant="raised" color="secondary"
                            onClick={this.onOpenCreate}
                    >ADD COMPANY</Button>
                    <Dialog
                        open={this.props.open}
                        aria-labelledby="form-dialog-title">
                        <CreateUserCompany/>
                    </Dialog>
                </div>

                <div >
                    <List/>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onOpenCreate: () => dispatch(companiesUserActions.onOpenCreate()),
    getUserCompanies: () => dispatch(companiesUserActions.getUserCompanies()),
});

const mapStateToProps = (state) => ({
    open: state.companyUserR.openCreate,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(C_UserProfile);

export default withConnect;