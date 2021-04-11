import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';

import { FETCH_USERPOSTS_REQUEST, FETCH_USERPOSTS_SUCCESS, FETCH_USERPOSTS_FAILURE } from './models/actions';
import { UserPost } from './models/UserPost';

import { FETCH_USERPOSTS_URL } from '../../Urls'

export const requestUserPosts = (): AppActions => ({
    type: FETCH_USERPOSTS_REQUEST,
    loading: true,
    userPosts: [],
    error: ''
})

export const receiveUserPosts = (userPosts: UserPost[]): AppActions => ({
    type: FETCH_USERPOSTS_SUCCESS,
    loading: false,
    userPosts: userPosts,
    error: ''
})

export const invalidateUserPosts = (error: string): AppActions => ({
    type: FETCH_USERPOSTS_FAILURE,
    loading: false,
    userPosts: [],
    error: error
})

export const boundRequestUserPosts = (id: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestUserPosts())
        return fetch(FETCH_USERPOSTS_URL + `${id}`)
        .then((response) => response.json())
        .then((json) => dispatch (receiveUserPosts(json)))
        .catch(err => dispatch (invalidateUserPosts(err)));
    }
}