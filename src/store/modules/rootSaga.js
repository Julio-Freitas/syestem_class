import { all } from 'redux-saga/effects';

import login from './login/sagas';
import studientList from './studentList/sagas';

export default function* rootSaga() {
    return yield all([login, studientList]);
}
