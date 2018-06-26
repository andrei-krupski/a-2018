import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson, LessonModel } from './lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.styl']
})
export class LessonComponent implements OnInit {
  @Input() private lessonData: LessonModel;
  @Output() deleteLessonEvent = new EventEmitter<string>();

  lesson: Lesson;

  constructor() {}

  ngOnInit() {
    this.lesson = new Lesson(this.lessonData);
  }

  deleteLesson(id) {
    this.deleteLessonEvent.emit(id);
  }
}
