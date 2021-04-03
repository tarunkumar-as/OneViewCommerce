import { UserPost } from './UserPost';

export const FETCH_USERPOSTS_REQUEST = 'FETCH_USERPOSTS_REQUEST';
export const FETCH_USERPOSTS_SUCCESS = 'FETCH_USERPOSTS_SUCCESS';
export const FETCH_USERPOSTS_FAILURE = 'FETCH_USERPOSTS_FAILURE';

interface UserPostAsync {
    loading: boolean;
    userPosts: UserPost[];
    error: string;
}

interface FetchUserPostsRequest extends UserPostAsync {
    type: typeof FETCH_USERPOSTS_REQUEST;
}

interface FetchUserPostsSuccess extends UserPostAsync {
    type: typeof FETCH_USERPOSTS_SUCCESS;
}

interface FetchUserPostsFailure extends UserPostAsync {
    type: typeof FETCH_USERPOSTS_FAILURE;
}

export type UserPostActionTypes = FetchUserPostsRequest | FetchUserPostsSuccess | FetchUserPostsFailure