import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';

import EditUser from "../../Components/Users/Edit";
import Dialog from 'material-ui/Dialog';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';



import * as usersActions from "../../Actions/usersActions";
import {connect} from "react-redux";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    tableHeader: {
        borderBottomColor: theme.palette.primary.light,
        color: '#3f51b5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    boldText:{
        fontWeight: 'bold',
    }
});

function  UsersList(props){
    const {classes} = props;

    const onDelete = (id) => {
        props.onDelete(id);
    }

    const onOpenEdit = (user) => {
        props.onOpenEdit(user);
    }
    return(

        <div className={classes.root}>
            <Table className={classes.table}>
                <TableHead >
                    <TableRow>
                        <TableCell colSpan='7' className={classes.tableHeader}>Users</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell className={classes.boldText} >{n.username}</TableCell>
                                <TableCell >{n.firstName}</TableCell>
                                <TableCell >{n.lastName}</TableCell>
                                <TableCell >{n.userRoleId}</TableCell>
                                <TableCell display="none">{n.password}</TableCell>
                                <TableCell >
                                    <IconButton color='secondary' onClick={()=>onOpenEdit(n)}>
                                        <ModeEdit />
                                    </IconButton>
                                </TableCell>
                                <TableCell >
                                    <IconButton  color='inherit' onClick={()=>onDelete(n.id)}>
                                        <Delete/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>

                        );
                    })}
                </TableBody>
            </Table>
            <Dialog open={props.open} aria-labelledby="form-dialog-title">
                <EditUser/>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
     onDelete: (id) => dispatch(usersActions.onDeleteInit(id)),
     onOpenEdit: (user) => dispatch(usersActions.onOpenEdit(user)),
});

const mapStateToProps = (state) => ({
    users: state.usersR.usersList,
    open: state.usersR.openEdit,
});

UsersList.propTypes = {
    classes: PropTypes.object.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersList));

export default withConnect;