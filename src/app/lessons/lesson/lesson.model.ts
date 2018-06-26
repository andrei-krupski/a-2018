export interface LessonModel {
    id: number;
    title: string;
    description: string;
    duration: string;
    creationDate: string;
}

export class Lesson implements LessonModel {
    id: number;
    title: string;
    description: string;
    duration: string;
    creationDate: string;

    constructor(lesson: LessonModel) {
        this.id = lesson.id;
        this.title = lesson.title;
        this.description = lesson.description;
        this.duration = lesson.duration;
        this.creationDate = lesson.creationDate;
    }

    add() {
        console.log('Add lesson');
    }

    edit(id) {
        console.log(`Edit lesson: ${id}`);
    }
}
