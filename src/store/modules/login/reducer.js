import * as types from './types';

const INITAL_STATE = {
    isLoggedIn: false,
    token: '',
    user: {},
};
export default function reducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case types.LOGIN_APP_SUCESS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token,
                user: action.payload.user,
            };
        case types.LOGIN_APP_FAILURE:
            return { ...state, isLoggedIn: action.payload };

        default: {
            return state;
        }
    }
}
