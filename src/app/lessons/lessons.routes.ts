import { Routes } from '@angular/router';
import { LessonGuard } from './lesson.guard';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'lessons',
        pathMatch: 'full'
    },
    {
        path: 'lessons',
        component: LessonsListComponent
    },
    {
        path: 'lessons/new',
        component: EditLessonComponent,
        canActivate: [LessonGuard]
    },
    {
        path: 'lessons/:id',
        component: EditLessonComponent,
        canActivate: [LessonGuard]
    }
];
