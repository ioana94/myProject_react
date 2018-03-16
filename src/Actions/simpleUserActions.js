import http from "../Config/http";
import {push} from "react-router-redux";
import {onLoginSuccess} from "./auth";


//================= COMPONENT DID MOUNT ACTIONS ===========================

export const getContact = (id) => {
    return (dispatch) => {
        http.get(`/users/${id}/${true}`)
            .then ((response) => {
                dispatch(onGetContactSuccess(response.data, response.data.contactInfo));
                console.log(response.data);
            })
            .catch((error) => dispatch(onGetContactFailure(error)));
    };
};
export const onGetContactSuccess = (payload, value) => {
    return {type: 'GET_USER_CONTACT_SUCCESS', payload, value};
};

export const onGetContactFailure = (error) => {
    return {type: 'GET_USER_CONTACT_ERROR', error};
};


export const getSkills = (id) => {
    return (dispatch) => {
        http.get(`/userskills/user/${id}`)
            .then ((response) => {
                dispatch(onGetSkillsSuccess(response.data));
            })
            .catch((error) => dispatch(onGetSkillsFailure(error)));
    };
};
export const onGetSkillsSuccess = (payload) => {
    return {type: 'GET_USER_SKILLS_SUCCESS', payload};
};

export const onGetSkillsFailure = (error) => {
    return {type: 'GET_USER_SKILLS_ERROR', error};
};


export const getWorkExperience = (id) => {
    return (dispatch) => {
        http.get(`/userworkexperiences/user/${id}`)
            .then ((response) => {
                dispatch(onGetWExpSuccess(response.data));
            })
            .catch((error) => dispatch(onGetWExpFailure(error)));
    };
};
export const onGetWExpSuccess = (payload) => {
    return {type: 'GET_USER_WEXP_SUCCESS', payload};
};

export const onGetWExpFailure = (error) => {
    return {type: 'GET_USER_WEXP_ERROR', error};
};


export const getEducation = (id) => {
    return (dispatch) => {
        http.get(`/usereducations/user/${id}`)
            .then ((response) => {
                dispatch(onGetEducationSuccess(response.data));
            })
            .catch((error) => dispatch(onGetEducationFailure(error)));
    };
};
export const onGetEducationSuccess = (payload) => {
    return {type: 'GET_USER_EDUCATION_SUCCESS', payload};
};

export const onGetEducationFailure = (error) => {
    return {type: 'GET_USER_EDUCATION_ERROR', error};
};


export const getAppliedJobs = (id) => {
    return (dispatch) => {
        http.get(`/userjobapplications/user/${id}`)
            .then ((response) => {
                dispatch(onGetAppliedJobsSuccess(response.data));
            })
            .catch((error) => dispatch(onGetAppliedJobsFailure(error)));
    };
};
export const onGetAppliedJobsSuccess = (payload) => {
    return {type: 'GET_USER_APPLIED_JOBS_SUCCESS', payload};
};

export const onGetAppliedJobsFailure = (error) => {
    return {type: 'GET_USER_APPLIED_JOBS_ERROR', error};
};

// ======================== EDIT USER ACTIONS =======================

export const onOpenEdit = () => {
    return {type: 'OPEN_EDIT'};
};

export const onCloseEdit = () => {
    return {type: 'CLOSE_EDIT'};
};

// export const onOpenAddSkill = () => {
//     return {type: 'OPEN_ADD_SKILL'};
// };
// export const onCloseAddSkill = () => {
//     return {type: 'CLOSE_ADD_SKILL'};
// };
//
// export const onOpenAddWExp = () => {
//     return {type: 'OPEN_ADD_WEXP'};
// };
// export const onCloseAddWExp = () => {
//     return {type: 'CLOSE_ADD_WEXP'};
// };
//
// export const onOpenAddEducation = () => {
//     return {type: 'OPEN_ADD_EDUCATION'};
// };
// export const onCloseAddEducation = () => {
//     return {type: 'CLOSE_ADD_EDUCATION'};
// };


export const saveNewDetails = (user) => {
    return async (dispatch) => {
        try {
            const response = await http.put(`/users/${user.id}`, user);

            if(user.contactInfo){
                const contactId = response.data.contactInfoId;
                await http.put(`/contacts/${contactId}`, user.contactInfo);
                dispatch(getContact(response.data.id));
            }
            else {
                const userId = user.id;
                const contactInfo = user.contactInfo;
                contactInfo.userId = userId;
                await http.post(`/contacts`, contactInfo);
                dispatch(getContact(user.id));
                //dispatch(onLoginSuccess(response.data));
            }

            if (user.userWorkExperienceInfoList) {
                const userId = user.id;
                for (let i = 0; i < user.userWorkExperienceInfoList.length; i++ ) {
                    const wExp = user.userWorkExperienceInfoList[i];
                    wExp.userId = userId;

                    await http.post(`/userworkexperiences`, wExp);
                    dispatch(getWorkExperience(user.id));
                }
            }

            if (user.userEducationInfoList) {
                const userId = user.id;
                for (let i = 0; i < user.userEducationInfoList.length; i++ ) {
                    const edu = user.userEducationInfoList[i];
                    edu.userId = userId;

                    await http.post(`/usereducations`, edu);
                    dispatch(getEducation(user.id));
                }
            }


            console.log(response.data);
            dispatch(onCloseEdit());
        }
        catch(error){
            dispatch(onSaveDetailsFailure(error));
        }
    };
};

export const onSaveDetailsFailure = (error) =>{
    return {type: 'SAVE_EDIT_DETAILS_ERROR', error};
}


// ================ CHANGE PAGE ============================
export const changePage = (id) => {
    return (dispatch) => {
        dispatch(push(`/job/${id}`));
    };
};