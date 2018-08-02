export interface NewLessonModel {
    title: string;
    description: string;
    duration: number;
    creationDate: string;
    topRated: boolean;
}

export interface LessonModel extends NewLessonModel {
    id: number;
}
