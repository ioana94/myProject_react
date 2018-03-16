import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';

import AccountCircle from 'material-ui-icons/AccountCircle';
import Contacts from 'material-ui-icons/Contacts';
import Divider from 'material-ui/Divider';
import Domain from 'material-ui-icons/Domain';
import Info from 'material-ui-icons/Info';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import People from 'material-ui-icons/People';
import Spellcheck from 'material-ui-icons/Spellcheck';
import StarBorder from 'material-ui-icons/StarBorder';

import { Link } from 'react-router-dom';

const styles = theme => ({
    menu: {
        width: 200,
        height: '100vh',
        alignSelf: 'flex-end',
    },

    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},

    link: {
        textDecorationLine: 'none',
    }
});

function Sidebar(props) {
    const { classes } = props;


    return (
        <div >
        <Paper className={classes.menu}>
            <MenuList >
                {(localStorage.getItem("USER_ROLE") == 3)?
                    <Link to={`/myprofile/${localStorage.getItem('USER_ID')}`} className={classes.link}>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon} >
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="My Profile" />
                        </MenuItem>
                    </Link>:
                    (localStorage.getItem("USER_ROLE") == 2)?
                    <Link to={"/myprofile"} className={classes.link}>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon}>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="My Companies" />
                        </MenuItem>
                    </Link>:
                        null
                }

                {(localStorage.getItem("USER_ROLE") != 1)?<div>
                    <Link to={"/companies"} className={classes.link}>
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <Domain />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Companies" />
                            </MenuItem>
                    </Link>
                    <Link to={"/jobs"} className={classes.link}>
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Jobs" />
                            </MenuItem>
                    </Link>
                    </div>:
                    <Link to={"/users"} className={classes.link}>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon}>
                                <People />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="Users" />
                        </MenuItem>
                    </Link>
                }
                <br/>
                <Divider/>
                <br/>
                <Link to={"/aboutUs"} className={classes.link}>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <Info />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="About Us" />
                    </MenuItem>
                </Link>
                <Link to={"/contact"} className={classes.link}>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <Contacts />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Contact" />
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
        </div>
    );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Sidebar);