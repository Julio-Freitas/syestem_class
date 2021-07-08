import * as types from './types';

const INITAL_STATE = {
    studentList: [],
};
export default function reducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case types.STUDENTLIST_SUCCESS:
            return { ...state, studentList: action.payload.data };
        case types.STUDENTLIST_FAILURE:
            return state;

        default: {
            return state;
        }
    }
}
