import { AuthorModel } from '../../user/user.model';

export interface LessonModel {
    id?: number;
    title: string;
    description: string;
    duration: number;
    creationDate: string;
    topRated: boolean;
    authors: AuthorModel[];
}

export interface OriginLessonModel {
    id?: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: string;
    authors: AuthorModel[];
    length: number;
}

export interface ResponseLessonsModel {
    courses: OriginLessonModel[];
    total: number;
}
