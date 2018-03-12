import React from 'react';

import AppToolbar from '../../Components/Toolbar';
import Companies from '../Companies';
import C_UserProfile from '../C_UserProfile';
import S_UserProfile from '../S_UserProfile';

import Jobs from '../Jobs';
import CompanyDetails from '../C_UserProfile/CompanyDetails';
import JobDetails from '../C_UserProfile/JobDetails';

import Home from '../Home';
import Sidebar from '../../Components/SideBar';
import Users from '../Users';


import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';



    const ConnectedSwitch = connect(state => ({
        location: state.router.location
    }))(Switch);


    class Layout extends React.Component {

        render(){

        const style = {
            root: {
                //height:'100vh',
                width: '100vw',
            },
            contentDiv:{
                width: 'auto',
                display: 'flex',
            },
            menuDiv:{
                width: 200,
                height:'100%',
            },
            pagesDiv:{
                flex: 1,
                height:'100%',
                paddingLeft: 20,
                paddingRight: 20,

            },
        };

        return (
            <div style={style.root}>

                <AppToolbar/>
                <div style={style.contentDiv} >
                    <div style={style.menuDiv} hidden={this.props.isLoggedIn1}>
                        <Sidebar/>
                    </div>
                    <div style={style.pagesDiv}>
                        {this.props.isLoggedIn ?
                            <ConnectedSwitch>
                                <Route exact path="/" component={Home}/>
                                {(this.props.user.userRoleId == 1)?
                                    <Route exact path="/users" component={Users}/> : null }
                                <Route exact path="/companies" component={Companies}/>
                                <Route exact path="/jobs" component={Jobs}/>
                                {(this.props.user.userRoleId == 2)?
                                     <Route exact path="/myprofile" component={C_UserProfile}/> : null }
                                {(this.props.user.userRoleId == 3)?
                                    <Route exact path="/myprofile" component={S_UserProfile}/> : null }
                                <Route exact path="/company/:id" component={CompanyDetails}/>
                                <Route exact path="/job/:id" component={JobDetails}/>
                                <Route exact path="*" component={Home}/>
                            </ConnectedSwitch>
                            :
                            <ConnectedSwitch>
                                <Route exact path="/" component={Home}/>
                            </ConnectedSwitch>
                        }
                    </div>
                </div>
            </div>

        );
    }

}


const mapStateToProps = (state) => ({
    isLoggedIn1: !state.auth.isLoggedIn,
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.loggedInUserInfo,
});

const withConnect = connect(mapStateToProps, null)(Layout);

export default withConnect;


