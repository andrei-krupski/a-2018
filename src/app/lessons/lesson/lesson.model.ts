export interface LessonModel {
    id: number;
    title: string;
    description: string;
    duration: number;
    creationDate: string;
    topRated: boolean;
}

export class Lesson implements LessonModel {
    id: number;
    title: string;
    description: string;
    duration: number;
    creationDate: string;
    topRated: boolean;

    constructor(lesson: LessonModel) {
        this.id = lesson.id;
        this.title = lesson.title;
        this.description = lesson.description;
        this.duration = lesson.duration;
        this.creationDate = lesson.creationDate;
        this.topRated = lesson.topRated;
    }

    add() {
        console.log('Add lesson');
    }

    edit(id) {
        console.log(`Edit lesson: ${id}`);
    }
}
