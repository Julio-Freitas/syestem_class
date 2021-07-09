import { put, call, takeLatest, all } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

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
        toast.error('Algo de errado aconteceu. Tente novamente mais tarde!');
        yield put({
            type: types.STUDENTLIST_FAILURE,
            payload: { data: [] },
        });
    }
}

export default all([takeLatest(types.STUDENTLIST_REQUEST, studentList)]);
