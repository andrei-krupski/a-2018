import { UserActionTypes, UserActions } from '../actions';
import { UserState } from '../app.states';

export function userReducer(state = {}, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {user: action.payload};
        case UserActionTypes.DELETE_USER:
            return {};
        default:
            return state;
    }
}
