const initialState = {
    openForm: false,
    newCompanyInfo: null,
    error: null,
    companyList: [],
    companyToView: null,
    companyToUpdate: null,
    openEdit: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMPANIES':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, companyList: action.payload };
        case 'GET_COMPANIES_ERROR':
            console.log('Am ajuns in Company Reducer ERROR', action);
            return { ...state, error: action.error };
        case 'GET_COMPANY_SUCCESS':
            console.log('Am ajuns in Company Reducer SUCCESS', action);
            return { ...state, companyToView: action.payload };
        case 'GET_COMPANY_ERROR':
            console.log('Am ajuns in Company Reducer ERROR', action);
            return { ...state, error: action.error };
        // case 'ON_OPEN_CREATE':
        //     console.log('Am ajuns in Company Reducer SUCCESS', action);
        //     return { ...state, openForm: true};
        // case 'ON_EXIT_CREATE':
        //     console.log('Am ajuns in Company Reducer SUCCESS', action);
        //     return { ...state, openForm: false };
        // case 'ON_CREATE_SUCCESS':
        //     console.log('Am ajuns in creere SUCCESS', action);
        //     return { ...state, newCompanyInfo: action.payload, openForm: false};
        // case 'ON_CREATE_ERROR':
        //     console.log('Am ajuns in reducer ERROR', action);
        //     return { ...state, error: action.error };
        // case 'ON_OPEN_EDIT':
        //     return {...state, openEdit: true, companyToUpdate: action.value};
        // case 'ON_EXIT_EDIT':
        //     console.log('Am ajuns in Company Reducer SUCCESS', action);
        //     return { ...state, openEdit: false };
        // case 'EDIT_ERROR':
        //     console.log('Am ajuns in reducer ERROR la edit', action);
        //     return { ...state, error: action.error };
        // case 'DELETE_ERROR':
        //     console.log('Am ajuns in reducer ERROR la delete', action);
        //     return { ...state, error: action.error };
        default:
            return state;
    }
};
export default reducer;