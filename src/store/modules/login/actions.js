import * as types from './types';

export const login = (payload) => ({
    type: types.LOGIN_APP,
    payload,
});

export const loginSucess = (payload) => ({
    type: types.LOGIN_APP_SUCESS,
    payload,
});

export const loginFailure = (payload) => ({
    type: types.LOGIN_APP_FAILURE,
    payload,
});
