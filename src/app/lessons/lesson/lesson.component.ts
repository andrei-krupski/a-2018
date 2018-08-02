import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LessonModel } from './lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent implements OnInit {
  @Input() private lessonData: LessonModel;
  @Output() deleteLessonEvent = new EventEmitter<number>();
  @Output() editLessonEvent = new EventEmitter<number>();

  lesson: LessonModel;

  ngOnInit() {
    this.lesson = this.lessonData;
  }

  deleteLesson() {
    this.deleteLessonEvent.emit(this.lesson.id);
  }

  editLesson() {
    this.editLessonEvent.emit(this.lesson.id);
  }
}
