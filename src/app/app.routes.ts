import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '**',
        component: NotFoundPageComponent
    }
];