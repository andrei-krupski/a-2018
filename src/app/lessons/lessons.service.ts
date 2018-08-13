import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { DEFAULT_LESSONS_QUERY_PARAMS, SERVER_DOMAIN } from '../app.config';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { OriginLessonModel, LessonModel, ResponseLessonsModel, InnerLessonsModel } from './lesson/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor(private http: HttpClient) {}

  private getHttpParams(params) {
    let newParams: HttpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        newParams = newParams.set(key, params[key]);
      }
    }

    return newParams;
  }

  private transformLesson(lesson: OriginLessonModel): LessonModel {
    return {
      id: lesson.id,
      title: lesson.name,
      description: lesson.description,
      duration: lesson.length,
      creationDate: lesson.date,
      topRated: lesson.isTopRated,
      authors: lesson.authors
    };
  }

  private transformLessonForRequest(lesson: LessonModel): OriginLessonModel {
    const newLesson: OriginLessonModel = {
      name: lesson.title || '',
      description: lesson.description || '',
      length: lesson.duration || 0,
      date: lesson.creationDate || '',
      isTopRated: lesson.topRated || false,
      authors: lesson.authors || []
    };

    if (lesson.id) {
      newLesson.id = lesson.id;
    }

    return newLesson;
  }

  private transformLessons(lessons: OriginLessonModel[]): LessonModel[] {
    return lessons.map((item: OriginLessonModel) => this.transformLesson(item));
  }

  private handleError(error: HttpErrorResponse) {
    let message: string;

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
      message = 'Network error, please try later';
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
      message = 'Server error, please try later';
    }

    return throwError(message);
  }

  getLessons(params = DEFAULT_LESSONS_QUERY_PARAMS): Observable<InnerLessonsModel> {
    return this.http
      .get(`${SERVER_DOMAIN}/courses`, {params: this.getHttpParams(params)})
      .pipe(map((res: ResponseLessonsModel): InnerLessonsModel => ({
        courses: this.transformLessons(res.courses),
        total: res.total
      })))
      .pipe(catchError(this.handleError));
  }

  getLessonById(id): Observable<LessonModel> {
    return this.http.get(`${SERVER_DOMAIN}/courses/${id}`)
      .pipe(map((res: OriginLessonModel): LessonModel => this.transformLesson(res)))
      .pipe(catchError(this.handleError));
  }

  deleteLessonById(id) {
    return this.http.delete(`${SERVER_DOMAIN}/courses/${id}`);
  }

  createLesson(data) {
    return this.http.post(`${SERVER_DOMAIN}/courses`, this.transformLessonForRequest(data));
  }

  updateLesson(data) {
    return this.http.patch(`${SERVER_DOMAIN}/courses/${data.id}`, this.transformLessonForRequest(data));
  }
}
