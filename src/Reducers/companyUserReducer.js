const initialState = {
    companyUserList:[],
    error: null,
    openCreate: false,
    openEdit: false,
    newCompanyInfo:null,

    companyDetails: null,
    companyContact: null,
    companyToUpdate: null,
    companyContactToUpdate: null,

    jobsList: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_COMPANIES':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, companyUserList: action.payload };
        case 'GET_USER_COMPANIES_ERROR':
            console.log('Am ajuns in Company Reducer ERROR', action);
            return { ...state, error: action.error };
        case 'ON_OPEN_CREATE':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, openCreate: true};
        case 'ON_EXIT_CREATE':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, openCreate: false };
        case 'ON_CREATE_SUCCESS':
            console.log('Am ajuns in creere SUCCESS', action);
            return { ...state, newCompanyInfo: action.payload, openCreate: false};
        case 'ON_CREATE_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };

        case 'ON_OPEN_EDIT':
            return {...state, openEdit: true, companyToUpdate: action.value};
        case 'ON_EXIT_EDIT':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, openEdit: false };
        case 'EDIT_ERROR':
            console.log('Am ajuns in reducer ERROR la edit', action);
            return { ...state, error: action.error };
        case 'DELETE_ERROR':
            console.log('Am ajuns in reducer ERROR la delete', action);
            return { ...state, error: action.error };

        case 'GET_COMPANY_DETAILS_SUCCESS':
            return {...state, companyDetails: action.payload};
        case 'GET_COMPANY_DETAILS_ERROR':
            console.log('Am ajuns in reducer ERROR la detalii companie', action);
            return { ...state, error: action.error };

        case 'GET_COMPANY_CONTACT_SUCCESS':
            return {...state, companyContact: action.payload};
        case 'GET_COMPANY_CONTACT_ERROR':
            console.log('Am ajuns in reducer ERROR la contact companie', action);
            return { ...state, error: action.error };

        case 'GET_JOBS_LIST_SUCCESS':
            return {...state, jobsList: action.payload};
        case 'GET_JOBS_LIST_ERROR':
            console.log('Am ajuns in reducer ERROR la detalii companie', action);
            return { ...state, error: action.error };
        default:
            return state;
    }
};
export default reducer;