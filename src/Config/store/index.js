import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import authReducer from '../../Reducers/authReducer';
import companiesReducer from '../../Reducers/companiesReducer';
import companyUserReducer from '../../Reducers/companyUserReducer';
import simpleUserReducer from '../../Reducers/simpleUserReducer';
import layoutReducer from '../../Reducers/layoutReducer';
import usersReducer from '../../Reducers/usersReducer';
import jobsReducer from '../../Reducers/jobsReducer';


export const history = createHistory();

const rootReducer = combineReducers({
    auth: authReducer,
    layoutR: layoutReducer,
    router: routerReducer,
    usersR: usersReducer,
    companiesR: companiesReducer,
    companyUserR: companyUserReducer,
    jobsR: jobsReducer,
    simpleUserR: simpleUserReducer,

});

const middleWares = [
    thunk,
    routerMiddleware(history),

];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancers = composeEnhancers(
    applyMiddleware(...middleWares),
    // other store enhancers if any
);

const store = createStore(rootReducer, enhancers);

export default store;