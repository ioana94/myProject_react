import http from '../Config/http';
import {push} from 'react-router-redux';

export const initLogin = (value) => {
    return (dispatch) => {
        http.post('/users/login', value)
            .then((response) => {
                localStorage.setItem('IS_LOGGED_IN', "true");
                localStorage.setItem('USER_INFO', JSON.stringify(response.data));
                localStorage.setItem('USER_ROLE', response.data.userRoleId);
                localStorage.setItem('USER_ID', response.data.id);

                dispatch(onLoginSuccess(response.data));
                if(response.data.userRoleId === 1)
                    dispatch(push('/users'));
                else if(response.data.userRoleId === 2)
                    dispatch(push('/myprofile'));
                else if(response.data.userRoleId === 3)
                    dispatch(push('/myprofile'));

            })
            .catch((error) => dispatch(onLoginFailure(error)));
    };
};

export const onLoginSuccess = (payload) => {
    return { type: 'ON_LOGIN_SUCCESS', payload };
};

export const onLoginFailure = (error) => {
    return { type: 'ON_LOGIN_ERROR', error };
};

export const onLogout = () => {
    localStorage.clear();



    return { type: 'ON_LOGOUT' };
};
export const onOpen = () => {
    return { type: 'OPEN' };
};

export const exitLogin = () => {
    return { type: 'CLOSE'};
}

export const onAppInit = () => {
    return (dispatch) => {
        const userInfoFromLocalStorage = localStorage.getItem('USER_INFO');

        if (userInfoFromLocalStorage) {
            dispatch(onLoginSuccess(JSON.parse(userInfoFromLocalStorage)));
        }
    }
};