const initialState = {
    open: false,
    loggedInUserInfo: null,
    isLoggedIn: false,
    error: null,
    hideMenu: true,
    openSnack: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_LOGIN_INIT':
            console.log('Am ajuns in reducer');
            return state;
        case 'ON_LOGIN_SUCCESS':
            console.log('Am ajuns in reducer SUCCESS', action);
            return { ...state, isLoggedIn: true, loggedInUserInfo: action.payload, open:false, hideMenu:false, openSnack: false };
        case 'ON_LOGIN_ERROR':
            console.log('Am ajuns in reducer ERROR', action);
            return { ...state, error: action.error, openSnack: true };
        case 'OPEN':
            return { ...state, open: true};
        case 'ON_LOGOUT':
            return { ...state, isLoggedIn: null, loggedInUserInfo: null, hideMenu:true};
        case 'CLOSE':
            return { ...state, open: false};
        default:
            return state;
    }
};

export default reducer;