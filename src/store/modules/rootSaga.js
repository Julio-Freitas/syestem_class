import { all } from 'redux-saga/effects';

import login from './login/sagas';
import studientList from './studentList/sagas';
import student from './student/sagas';

export default function* rootSaga() {
    return yield all([login, studientList, student]);
}
