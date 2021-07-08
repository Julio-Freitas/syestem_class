import * as types from './types';

export const studentListRequest = (payload) => ({
    type: types.STUDENTLIST_REQUEST,
    payload,
});

export const loginSucess = (payload) => ({
    type: types.STUDENTLIST_SUCCESS,
    payload,
});

export const loginFailure = (payload) => ({
    type: types.STUDENTLIST_FAILURE,
    payload,
});
