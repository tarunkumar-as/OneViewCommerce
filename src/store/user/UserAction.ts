import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './models/actions';
import { User } from './models/User';

import { FETCH_USERS_URL } from '../../Urls'

export const requestUsers = (): AppActions => ({
    type: FETCH_USERS_REQUEST,
    loading: true,
    users: [],
    error: ''
})

export const receiveUsers = (users: User[]): AppActions => ({
    type: FETCH_USERS_SUCCESS,
    loading: false,
    users: users,
    error: ''
})

export const invalidateUsers = (error: string): AppActions => ({
    type: FETCH_USERS_FAILURE,
    loading: false,
    users: [],
    error: error
})

export const boundRequestUsers = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestUsers())
        return fetch(FETCH_USERS_URL)
        .then((response) => response.json())
        .then((json) => dispatch (receiveUsers(json)))
        .catch(err => dispatch (invalidateUsers(err)));
    }
}