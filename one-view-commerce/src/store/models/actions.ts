import { UserActionTypes } from '../user/models/actions'
import { UserPostActionTypes } from '../userPost/models/actions'

export type AppActions = UserActionTypes | UserPostActionTypes;