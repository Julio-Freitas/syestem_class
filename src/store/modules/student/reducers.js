import * as types from './types';

const INITIAL_STATE = {
    student: {},
};

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload.student,
            };

        case types.STUDENT_FAILURE:
            return {
                ...state,
                student: {},
            };

        default:
            return state;
    }
}
