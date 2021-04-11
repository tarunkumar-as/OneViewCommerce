import { UserActionTypes, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './models/actions';
import { User } from './models/User';

interface UserState {
    loading: boolean;
    users: User[];
    error: string;
}

const defaultState: UserState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = defaultState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                loading: true,
                users: [],
                error: ''
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.users,
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.error
            };
        default:
            return state;
    }
}