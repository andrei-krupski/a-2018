import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../lesson/lesson.model';

import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.styl']
})
export class LessonsListComponent implements OnInit {
  lessons: LessonModel[];

  constructor(private lessonService: LessonsService) {
    this.lessons = [];
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }

  deleteLesson(id: string) {
    this.lessonService.deleteLessonById(id);
  }

  loadMore() {
    console.log('Load more');
  }
}
