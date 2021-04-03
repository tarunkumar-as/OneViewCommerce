import { UserPostActionTypes, FETCH_USERPOSTS_REQUEST, FETCH_USERPOSTS_SUCCESS, FETCH_USERPOSTS_FAILURE } from './models/actions';
import { UserPost } from './models/UserPost';

interface UserState {
    loading: boolean;
    userPosts: UserPost[];
    error: string;
}

const defaultState: UserState = {
    loading: false,
    userPosts: [],
    error: ''
}

export const userPostReducer = (state = defaultState, action: UserPostActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERPOSTS_REQUEST:
            return {
                loading: true,
                userPosts: [],
                error: ''
            };
        case FETCH_USERPOSTS_SUCCESS:
            return {
                loading: false,
                userPosts: action.userPosts,
                error: ''
            };
        case FETCH_USERPOSTS_FAILURE:
            return {
                loading: false,
                userPosts: [],
                error: action.error
            };
        default:
            return state;
    }
}