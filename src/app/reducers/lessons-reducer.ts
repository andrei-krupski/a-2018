import { LessonsActionTypes, LessonsActions } from '../actions';
import { LessonsState } from '../app.states';

export function lessonsReducer(state = {}, action: LessonsActions): LessonsState {
    switch (action.type) {
        case LessonsActionTypes.SET_LESSON:
            return Object.assign({}, state, {
                lesson: action.payload,
                errorMsg: ''
            });
        case LessonsActionTypes.SET_LESSONS:
            return  Object.assign({}, state, {
                lessons: action.payload.courses,
                total: action.payload.total,
                errorMsg: ''
            });
        case LessonsActionTypes.SET_LESSONS_ERROR:
            return {
                lesson: null,
                lessons: null,
                total: null,
                errorMsg: action.payload
            };
        default:
            return state;
    }
}
