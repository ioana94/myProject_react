const initialState = {
    hideMenu: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_OPEN_DRAWER':
            return { ...state, openDrawer: false};

        default:
            return state;
    }
};

export default reducer;