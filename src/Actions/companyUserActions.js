import http from "../Config/http";
import {push} from 'react-router-redux';

export const onOpenCreate = () => {
    return { type: 'ON_OPEN_CREATE'};
};

export const onExitCreate = () => {
    return { type: 'ON_EXIT_CREATE'};
};

// ================== CREATE ACTIONS ==========================
export const initCreate = (value) => {
    return (dispatch) => {
        http.post('/companies', value)
            .then((response) => {
                console.log("cream companie");
                dispatch(onCreateSuccess(response.data));
                dispatch(getUserCompanies());
            })
            .catch((error) => dispatch(onCreateFailure(error)));
    };
};
export const onCreateSuccess = (payload) => {
    return { type: 'ON_CREATE_SUCCESS', payload };
};

export const onCreateFailure = (error) => {
    return { type: 'ON_CREATE_ERROR', error };
};

// ================== LIST ACTIONS ==========================
export const getUserCompanies = () => {
    return (dispatch) => {
        http.get(`/companies/user/${localStorage.getItem('USER_ID')}`)
            .then ((response) => {
                dispatch(onGetSuccess(response.data));
            })
            .catch((error) => dispatch(onGetFailure(error)));
    };
};

export const onGetSuccess = (payload) => {
    return { type: 'GET_USER_COMPANIES', payload };
};

export const onGetFailure = (error) => {
    return { type: 'GET_USER_COMPANIES_ERROR', error };
};

// ================== EDIT ACTIONS ==========================
export const onOpenEdit = (value) => {
    return { type: "ON_OPEN_EDIT", value }
};
export const onExitEdit = () => {
    return { type: 'ON_EXIT_EDIT'};
};
//cum sa creez un nou contact ptr o companie in momentul in care o editez!!!???
export const initEdit = (value, contact) => {
    return (dispatch) => {
        if (value.contactInfoId === null) {
            http.post(`/contacts`, contact)
                .then((response) => {

                })
                .catch();
        }
        else {
            http.put(`/companies/${value.id}`, value)
                .then((response) => {
                    dispatch(getUserCompanies());
                    console.log(response);
                })
                .catch((error) => dispatch(onEditFailure(error)));
        }
    };
};
export const onEditFailure = (error) => {
    return { type: 'EDIT_ERROR', error };
};

// ================== DELETE ACTIONS ==========================
export const onDeleteInit = (id) => {
    return (dispatch) => {
        http.delete(`/companies/${id}`)
            .then((response) => {
                dispatch(getUserCompanies());
                console.log(response);
            })
            .catch((error) => dispatch(onDeleteFailure(error)));
    };
};

export const onDeleteFailure = (error) => {
    return { type: 'DELETE_ERROR', error };
};

// ================== JOBS LIST ACTIONS ==========================
export const getJobsList = (id) => {
    return (dispatch) => {
        http.get(`/companies/${id}/${true}`)
            .then ((response) => {
                dispatch(onGetJobsSuccess(response.data.jobInfoList));
                localStorage.setItem('COMPANY_USER_ID', response.data.userId);
            })
            .catch((error) => dispatch(onGetJobsFailure(error)));
    };
};
export const onGetJobsSuccess = (payload) => {
    return { type: 'GET_JOBS_LIST_SUCCESS', payload };
};

export const onGetJobsFailure = (error) => {
    return { type: 'GET_JOBS_LIST_ERROR', error };
};

// ================== COMPANY BY ID ACTIONS ==========================
export const getCompanyDetails = (value) => {
    return (dispatch) => {
        http.get(`/companies/${value}/${true}`)
            .then ((response) =>{dispatch(onGetDetailsSuccess(response.data));
                                 //dispatch(getCompanyContact(response.data.contactInfoId));
                                })
            .catch((error) => dispatch(onGetDetailsFailure(error)));
    };
};


export const onGetDetailsSuccess = (payload) => {
    return { type: 'GET_COMPANY_DETAILS_SUCCESS', payload };
};

export const onGetDetailsFailure = (error) => {
    return { type: 'GET_COMPANY_DETAILS_ERROR', error };
};

// ================== CHANGE PAGE ACTIONS ==========================

export const onChangePage = (value, id) => {
    return (dispatch) => {
        dispatch(push(`/company/${value}`));
        localStorage.setItem('COMPANY_USER_ID', id);
        localStorage.setItem('COMPANY_ID', value);
    };
};

//