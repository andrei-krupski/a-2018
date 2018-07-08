import { Component } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonComponent } from './lesson.component';
import { LessonModel } from './lesson.model';
import { By } from '@angular/platform-browser';

const lessonData = {
  id: 1,
  title: 'title',
  description: 'description',
  duration: 'duration',
  creationDate: '01-01-1990'
};

@Component({
  template: '<app-lesson [lessonData]=lesson (deleteLessonEvent)="deleteLesson($event)"></app-lesson>'
})
class TestHostComponent {
  lesson: LessonModel = lessonData;
  deletedLessonId: number;

  deleteLesson(id: number) {
    this.deletedLessonId = id;
  }
}

describe('LessonComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger event on delete button click', () => {
    fixture.detectChanges();
    const deleteButton = fixture.debugElement.query(By.css('.lesson-control__delete'));

    deleteButton.triggerEventHandler('click', null);

    expect(testHost.deletedLessonId).toBe(1);
  });
});
