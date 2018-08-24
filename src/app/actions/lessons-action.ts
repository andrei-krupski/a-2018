import { Action } from '@ngrx/store';

import { LessonModel } from '../lessons/lesson/lesson.model';

export const LessonsActionTypes = {
    SET_LESSON: 'SET_LESSON',
    SET_LESSONS: 'SET_LESSONS',
    SET_LESSONS_ERROR: 'SET_LESSONS_ERROR'
};

export class SetLessonAction implements Action {
    readonly type = LessonsActionTypes.SET_LESSON;

    constructor(readonly payload: LessonModel) {}
}

export class SetLessonsAction implements Action {
    readonly type = LessonsActionTypes.SET_LESSONS;

    constructor(readonly payload: {courses: LessonModel[], total: number}) {}
}

export class SetLessonsErrorAction implements Action {
    readonly type = LessonsActionTypes.SET_LESSONS_ERROR;

    constructor(readonly payload: string) {}
}

export type LessonsActions = SetLessonAction & SetLessonsAction & SetLessonsErrorAction;
