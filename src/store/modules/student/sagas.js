import { takeLatest, all, put, call, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as respository from './repository';
import * as types from './types';
import history from '../../../services/history';

function* fetchStudent({ payload }) {
    try {
        const student = yield call(respository.getStudentById, payload);
        yield put({
            type: types.STUDENT_SUCCESS,
            payload: { student: student.data },
        });
    } catch (error) {
        error.response.data.erros.forEach((element) => toast.error(element));
        yield delay(3000);

        yield put({
            type: types.STUDENT_FAILURE,
            payload: { student: {} },
        });

        history.push('/alunos');
    }
}

function* updateStudent({ payload }) {
    const { id, foto, ...values } = payload;
    try {
        const studentUpdated = yield call(respository.updateStudent, {
            id,
            values,
        });

        const fotoUpdated = yield call(respository.updateImageSudent, foto);

        yield put({
            type: types.STUDENT_SUCCESS,
            payload: { student: studentUpdated.data },
        });
        console.log(fotoUpdated);
    } catch (error) {
        console.log(error);
    }
}

export default all([
    takeLatest(types.REQUEST_STUDENT, fetchStudent),
    takeLatest(types.UPDATE_REQUEST, updateStudent),
]);
