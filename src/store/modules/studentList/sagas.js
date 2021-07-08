import { put, call, takeLatest, all } from '@redux-saga/core/effects';
import * as types from './types';
import * as api from './repository';

function* studentList() {
    try {
        const { data } = yield call(api.getStudents);
        yield put({
            type: types.STUDENTLIST_SUCCESS,
            payload: { data },
        });
    } catch (error) {
        yield put({
            type: types.STUDENTLIST_FAILURE,
            payload: { data: [] },
        });
    }
}

export default all([takeLatest(types.STUDENTLIST_REQUEST, studentList)]);
