import { combineReducers } from 'redux';
import auth from './login/reducer';
import studientList from './studentList/reducer';
import student from './student/reducers';

export default combineReducers({
    auth,
    studientList,
    student,
});
