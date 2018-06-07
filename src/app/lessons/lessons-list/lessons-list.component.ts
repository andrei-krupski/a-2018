import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../lesson/lesson.model';

import { LessonsService } from '../../lessons/lessons.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.styl']
})
export class LessonsListComponent implements OnInit {
  lessons: LessonModel[];

  constructor(private lessonService: LessonsService) {
    this.lessons = lessonService.getLessons();
  }

  ngOnInit() {}
}
