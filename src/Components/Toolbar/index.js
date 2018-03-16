import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AccountBalance from 'material-ui-icons/AccountBalance';
import FindReplace from 'material-ui-icons/FindReplace';
import Snackbar from 'material-ui/Snackbar';

import Dialog from 'material-ui/Dialog';
import Login from '../../Components/Login';
import SignUp from '../../Components/SignUp';


import { connect } from 'react-redux';
import * as authActions from '../../Actions/auth.js';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        fontStyle: 'italic',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 50,
    },
    link: {
        textDecoration: 'none',
    }
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
                    <div className={classes.menuButton}>
                        <FindReplace />
                    </div>
                    {(localStorage.getItem('USER_ROLE') == 3)?
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Find the job that suits you!
                    </Typography>:
                        (localStorage.getItem('USER_ROLE') == 2)?
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Here are the employees that you are looking for!
                        </Typography>:
                            <Typography variant="title" color="inherit" className={classes.flex}>

                            </Typography>}

                    { props.isLoggedIn ?
                        <Link to={'/welcome'} className={classes.link}>
                            <Button onClick={onLogoutInComponent} color="inherit"> Logout</Button>
                        </Link>:
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
                    <Snackbar
                        //anchorOrigin={'bottom', 'left'}
                        open={props.openSnack}
                        //onClose={close}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Try again !</span>}
                    />

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
    openSnack: state.auth.openSnack,
});


AppToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppToolbar));

export default withConnect;