import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Dialog from 'material-ui/Dialog';
import Login from '../../Components/Login';
import SignUp from '../../Components/SignUp';


import { connect } from 'react-redux';
import * as authActions from '../../Actions/auth.js';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const AppToolbar = (props) => {
    const { classes } = props;

    const onLogoutInComponent = () => {
        props.onLogoutFromProps();
    };
    const onLoginInComponent = () => {
        props.onLoginFromProps();
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="title" color="inherit" className={classes.flex}>

                    </Typography>

                    { props.isLoggedIn ? <Button onClick={onLogoutInComponent} color="inherit"> Logout</Button>:
                        <div>
                        <Button color="inherit">SignUp</Button>
                        <Button onClick={onLoginInComponent} color="inherit"> Login</Button>
                        </div>}

                    <Dialog
                        open={props.open}
                        onClose={props.open}
                        aria-labelledby="form-dialog-title"
                    >
                        <Login/>
                    </Dialog>

                    <Dialog
                        open={props.openS}
                        // onClose={props.open}
                        aria-labelledby="form-dialog-title"
                    >
                        <SignUp/>
                    </Dialog>

                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onLogoutFromProps: () => dispatch(authActions.onLogout()),
    onLoginFromProps: () => dispatch(authActions.onOpen()),
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loggedInUserInfo: state.auth.loggedInUserInfo,
    open: state.auth.open,
});


AppToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppToolbar));

export default withConnect;