import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-author',
  templateUrl: './lesson-author.component.html',
  styleUrls: ['./lesson-author.component.styl']
})
export class LessonAuthorComponent implements OnInit {
  @Input() fieldId;

  constructor() { }

  ngOnInit() {}
}
