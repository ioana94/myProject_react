import React from 'react';

import Avatar from 'material-ui/Avatar';
import FormatQuote from 'material-ui-icons/FormatQuote';
import Email from 'material-ui-icons/Email';
import Language from 'material-ui-icons/Language';
import LocationOn from 'material-ui-icons/LocationOn';
import Phone from 'material-ui-icons/Phone';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import {connect} from "react-redux";

function ContactInfo (props) {
    //const {contact} = props;
    const style = {
        center:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        avatar: {
            paddingLeft: 10,
            width: '100%',
            height: 'auto',
        },
        details: {
            padding: 10,
        },
        mainDetails:{
            padding: 10,
            // display: 'flex',
            // justifyContent: 'space-around',
        },
        buttons:{
            display: 'flex',
            justifyContent: 'flex-end',
        },
        textField:{
            fontSize: 'small',
        },
        logo:{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    };

    // let user = {
    //     username: props.contact.username,
    //     firstName: props.contact.firstName,
    //     lastName: props.contact.lastName,
    //     contactInfo: {
    //         email: props.moreContact.email,
    //         phone:  props.moreContact.phone,
    //         address: props.moreContact.address,
    //         city: props.moreContact.city,
    //         website: props.moreContact.website,
    //         //avatarUrl: '',
    //         about: props.moreContact.about,
    //     },
    // };

    return (
        <Paper>
            <Grid container>
                <Grid item xs={true} sm={2} style={style.center}>
                    {(props.moreContact) ?
                    <img src={props.moreContact && props.moreContact.avatarUrl} style={style.avatar} />
                        :<div>No image</div>}
                </Grid>
                <Grid item xs={12} sm={10}>
                    <div>
                        <div style={style.mainDetails}>
                            <h1>{props.contact && props.contact.firstName} {props.contact && props.contact.lastName} </h1>
                            {props.contact && props.contact.username}
                        </div>
                        {props.moreContact ?
                        <div style={style.details}>
                            <FormatQuote fontSize={18} color='primary'/><i>&nbsp;{props.moreContact && props.moreContact.about}</i>
                            <br/><br/>
                            <Email fontSize={18} color='primary'/>&nbsp;{props.moreContact && props.moreContact.email}
                            <br/>
                            <Language fontSize={18} color='primary'/>&nbsp;{props.moreContact && props.moreContact.website}
                            <br/><br/>
                            <Phone fontSize={18} color='primary'/>&nbsp;{props.moreContact && props.moreContact.phone}
                            <br/>
                            <LocationOn fontSize={18} color='primary'/>&nbsp;{props.moreContact && props.moreContact.address},&nbsp;
                            {props.moreContact && props.moreContact.city}
                            <br/>
                        </div>: null}
                    </div>


                </Grid>
            </Grid>
         </Paper>
    );
}

const mapStateToProps = (state) => ({
    contact: state.simpleUserR.contact,
    moreContact: state.simpleUserR.moreContactInfos,
});

const withConnect = connect(mapStateToProps, null)(ContactInfo);

export default withConnect;
