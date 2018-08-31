import { createSelector } from '@ngrx/store';

import { UserModel } from './user/user.model';
import { LessonModel } from './lessons/lesson/lesson.model';
import { AuthorModel } from './lessons/author.model';

// Auth state
export interface AuthState {
    logged: boolean;
}

export const initialAuthState: AuthState = {
    logged: false
};

// User state
export interface UserState {
    user?: UserModel;
}

// Lessons state
export interface LessonsState {
    lesson?: LessonModel;
    lessons?: LessonModel[];
    total?: number;
    errorMsg?: string;
}

// Authors state
export interface AuthorsState {
    authors?: AuthorModel[];
}

/*
App state
*/
export interface AppState {
    auth: AuthState;
    user: UserState;
    lessonsData: LessonsState;
    authors: AuthorsState;
}

/*
Selectors
*/
export const selectAuth = (state: AppState) => state.auth;
export const authSelector = createSelector(selectAuth, (state: AuthState) => state.logged);

export const selectUser = (state: AppState) => state.user;
export const userSelector = createSelector(selectUser, (state: UserState) => state.user);

export const selectLessons = (state: AppState) => state.lessonsData;
export const lessonsSelector = createSelector(selectLessons, (state: LessonsState) => state);


export const selectAuthors = (state: AppState) => state.authors;
export const authorsSelector = createSelector(selectAuthors, (state: AuthorsState) => state.authors);
