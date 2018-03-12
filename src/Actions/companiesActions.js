
import http from "../Config/http";


// ================== LIST ACTIONS ==========================
export const getCompanies = () => {
    return (dispatch) => {
        http.get(`/companies`)
            .then ((response) => {
                dispatch(onGetSuccess(response.data));
            })
            .catch((error) => dispatch(onGetFailure(error)));
    };
};

export const onGetSuccess = (payload) => {
    return { type: 'GET_COMPANIES', payload };
};

export const onGetFailure = (error) => {
    return { type: 'GET_COMPANIES_ERROR', error };
};

// // ================== COMPANY BY ID ACTIONS ==========================
// export const getCompanyDetails = (value) => {
//     return (dispatch) => {
//         http.get(`/companies/${value}/${true}`)
//             .then ((response) => dispatch(onGetDetailsSuccess(response.data)))
//             .catch((error) => dispatch(onGetDetailsFailure(error)));
//     };
// };
//
// export const onGetDetailsSuccess = (payload) => {
//     return { type: 'GET_COMPANY_SUCCESS', payload };
// };
//
// export const onGetDetailsFailure = (error) => {
//     return { type: 'GET_COMPANY_ERROR', error };
// };

