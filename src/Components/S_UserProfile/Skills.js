import React from 'react';

import AddCircle from 'material-ui-icons/AddCircle';
import Chip from 'material-ui/Chip';
import Close from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import {connect} from "react-redux";
import * as simpleUserActions from "../../Actions/simpleUserActions";

function Skills (props) {
    const style = {
        root: {
          paddingLeft: 10,
            paddingBottom: 10,
        },
        header: {
            paddingTop: 5,
            display: 'flex',
            alignItems: 'center',
        },
        chip: {
            margin: 5,
        },
        textField:{
            fontSize: 'small',
        },
    };

    const onOpenAdd = () => {
        props.onOpenAdd();
    }

    const onCloseAdd = () => {
        props.onCloseAdd();
    }

    return (
        <Paper style={style.root}>
            <div style={style.header}>
                <h2>Skills</h2>
                <div hidden={!props.hide}>
                    <div hidden={props.open}>
                        <IconButton color="secondary" onClick={() => onOpenAdd()}>
                            <AddCircle/>
                        </IconButton>
                    </div>
                    <div hidden={!props.open}>
                        <IconButton color="secondary" onClick={() => onCloseAdd()}>
                            <Close/>
                        </IconButton>
                    </div>
                </div>
            </div>

            <div hidden={!props.open}>
                <TextField
                    type="text"
                    name="newSkill"
                    label="New Skill"
                    style={style.textField}
                    //onChange={(e) => {props.companyToUpdate.contactInfo.email = e.target.value; console.log(props.companyToUpdate.contactInfo.email)}}
                />
            </div>
            <br/>
            <div hidden={props.hide}>
                {props.skills.map(n=> {
                    return(
                        <span>
                        <Chip label={n.skillInfo.name}/>&nbsp;
                        </span>
                    );
                })}
            </div>

            <div hidden={!props.hide}>
                {props.skills.map(n=> {
                    return(
                        <span>
                        <Chip
                            key={n.id}
                            avatar={<IconButton color="default"
                                                // onClick={() => onDeleteSkill(n.id)}
                                ><Close/></IconButton>}
                            label={n.skillInfo.name}
                            style={style.chip}
                        />
                        </span>
                    );
                })}
            </div>
        </Paper>
    );
}

const mapStateToProps = (state) => ({
    skills: state.simpleUserR.skills,
    hide: state.simpleUserR.hideEdit,
    open: state.simpleUserR.openAddSkill,
});

const mapDispatchToProps = (dispatch) => ({
    onOpenAdd: () => dispatch(simpleUserActions.onOpenAddSkill()),
    onCloseAdd: () => dispatch(simpleUserActions.onCloseAddSkill()),

});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default withConnect;
