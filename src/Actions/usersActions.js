import http from '../Config/http';
import * as companyUserActions from "./companyUserActions";
import {getJobs, onCreateJobtFailure} from "./jobsActions";


// ================== CREATE ACTIONS ==========================
export const onOpenForm = () => {
    return { type: 'ON_OPEN_CREATE'};
};
export const onExitForm = () => {
    return { type: 'ON_EXIT_CREATE'};
};
//
// export const initCreate = (value) => {
//     return (dispatch) => {
//         http.post('/users', value)
//             .then((response) => {
//                 console.log("cream user");
//                 dispatch(onCreateSuccess(response.data));
//                 dispatch(getUsers());
//             })
//             .catch((error) => dispatch(onCreateFailure(error)));
//     };
// };
export const initCreate = (user) => {
    return async (dispatch) => {
        try {
            const response = await http.post(`/users`, user);

            // if (user.userEducationInfoList) {
            //     const userId = response.data.id;
            //     for (let i = 0; i < user.userEducationInfoList.length; i++ ) {
            //         const education = user.userEducationInfoList[i];
            //         education.userId = userId;
            //
            //         await http.post('/usereducations', education);
            //     }
            // }
            // if (user.userWorkExperienceInfoList) {
            //     const userId = response.data.id;
            //     for (let i = 0; i < user.userWorkExperienceInfoList.length; i++ ) {
            //         const workExp = user.userWorkExperienceInfoList[i];
            //         workExp.userId = userId;
            //
            //         await http.post('/userworkexperiences', workExp);
            //     }
            // }

            dispatch(onCreateSuccess(response.data));
            dispatch(getUsers());
        }
        catch (error) {
            dispatch(onCreateFailure(error));
        }
    };
};
export const onCreateSuccess = (payload) => {
    return { type: 'ON_CREATE_SUCCESS', payload };
};

export const onCreateFailure = (error) => {
    return { type: 'ON_CREATE_ERROR', error };
};

// ================== LIST ACTIONS ==========================
export const getUsers = () => {
    return (dispatch) => {
        http.get(`/users`)
            .then ((response) => dispatch(onGetSuccess(response.data)))
            .catch((error) => dispatch(onGetFailure(error)));
    };
};

export const onGetSuccess = (payload) => {
    return { type: 'GET_USERS', payload };
};

export const onGetFailure = (error) => {
    return { type: 'GET_USERS_ERROR', error };
};

// ================== DELETE ACTIONS ==========================
export const onDeleteInit = (id) => {
    return (dispatch) => {
        http.delete(`/users/${id}`)
            .then((response) => {
                dispatch(getUsers());
                console.log(response);
            })
            .catch((error) => dispatch(onDeleteFailure(error)));
    };
};

export const onDeleteFailure = (error) => {
    return { type: 'DELETE_ERROR', error };
};

// ================== EDIT ACTIONS ==========================

export const onOpenEdit = (payload) => {
    return { type: 'ON_OPEN_EDIT', payload};
};
export const onExitEdit = () => {
    return { type: 'ON_EXIT_EDIT'};
};
export const initEdit = (value) => {
    return (dispatch) => {
        http.put(`/users/${value.id}`, value)
            .then((response) => {
                dispatch(getUsers());
                console.log(response);
            })
            .catch((error) => dispatch(onEditFailure(error)));
    };
};

export const onEditFailure = (error) => {
    return { type: 'EDIT_ERROR', error };
};
