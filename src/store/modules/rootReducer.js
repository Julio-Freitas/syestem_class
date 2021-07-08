import { combineReducers } from 'redux';
import auth from './login/reducer';
import studientList from './studentList/reducer';

export default combineReducers({
    auth,
    studientList,
});
