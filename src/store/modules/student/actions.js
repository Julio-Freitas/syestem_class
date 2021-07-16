import * as types from './types';

export const showStudentById = (payload) => ({
    type: types.REQUEST_STUDENT,
    payload,
});

export const updateStudent = (payload) => ({
    type: types.UPDATE_REQUEST,
    payload,
});
