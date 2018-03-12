const initialState = {
    openForm: false,
    newUserInfo: null,
    error: null,
    usersList: [],
    userToUpdate: null,
    openEdit: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_OPEN_CREATE':
            return { ...state, openForm: true};
        case 'ON_EXIT_CREATE':
            return { ...state, openForm: false};
        case 'ON_CREATE_SUCCESS':
            console.log('Am ajuns in reducer SUCCESS', action);
            return { ...state, newUserInfo: action.payload, openForm: false};
        case 'ON_CREATE_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'GET_USERS':
            return { ...state, usersList: action.payload };
        case 'GET_USERS_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'DELETE_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error };
        case 'ON_OPEN_EDIT':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, userToUpdate: action.payload, openEdit: true };
        case 'ON_EXIT_EDIT':
            return { ...state, openEdit: false};

        default:
            return state;
    }
};

export default reducer;