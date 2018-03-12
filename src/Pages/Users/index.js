import React from 'react';

import Button from 'material-ui/Button';
import CreateUser from "../../Components/Users/Create";
import Dialog from 'material-ui/Dialog';
import List from "../../Components/Users/List"


import * as usersActions from "../../Actions/usersActions";
import {connect} from "react-redux";




class Users extends React.Component{

    onOpenNew = () =>{
        this.props.onOpenNew();
    }

    componentDidMount(){
        this.props.getUsers();
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
                    <Button variant="raised" color="secondary" onClick={this.onOpenNew}>Add User</Button>
                    <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
                        <CreateUser/>
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
    onOpenNew: () => dispatch(usersActions.onOpenForm()),
    getUsers: () => dispatch(usersActions.getUsers()),
});

const mapStateToProps = (state) => ({
    open: state.usersR.openForm,
});


const withConnect = connect(mapStateToProps, mapDispatchToProps)(Users);

export default withConnect;
