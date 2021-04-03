import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import  { createLogger } from 'redux-logger';

import { userReducer } from './user/UserReducer';
import { userPostReducer } from './userPost/UserPostReducer';
import { AppActions } from './models/actions';

const logger = createLogger();

export const rootReducer = combineReducers({ userReducer, userPostReducer })

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
