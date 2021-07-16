// @ts-ignore
import { put, call, takeLatest, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import Api from '../../../services/api';
import history from '../../../services/history';
import * as types from './types';
import * as request from './repository';
import * as actions from './actions';

function* loginRequest({ payload }) {
    try {
        const { email, password } = payload;
        const { data } = yield call(request.auth, { email, password });
        Api.defaults.headers.Authorization = `Bearer ${data.token}`;
        toast.success('Vocẽ está logado');
        yield put(
            actions.loginSucess({
                isLoggedIn: true,
                token: data.token,
                user: { name: 'julio' },
            })
        );
        history.push('/alunos');
    } catch (error) {
        toast.error(error.response.data.erros);
        yield put(
            actions.loginFailure({
                isLoggedIn: false,
                token: '',
                user: {},
            })
        );
    }
}

export default all([takeLatest(types.LOGIN_APP, loginRequest)]);
