import { Component, OnInit, Input } from '@angular/core';
import { Lesson, LessonModel } from './lesson.model';
import { LessonsService } from '../../lessons/lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.styl']
})
export class LessonComponent implements OnInit {
  @Input() private lessonData: LessonModel;

  lesson: Lesson;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lesson = new Lesson(this.lessonData);
  }

  deleteLesson(id) {
    this.lessonsService.deleteLessonById(id);
  }
}
