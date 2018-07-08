import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LessonsListComponent } from './lessons-list.component';
import { LessonsService } from '../lessons.service';

describe('LessonsListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;
  let lessonServiceStub: Partial<LessonsService>;

  beforeEach(async(() => {
    lessonServiceStub = {
      getLessons: jasmine.createSpy('getLessons'),
      deleteLessonById: jasmine.createSpy('deleteLessonById')
    };

    TestBed.configureTestingModule({
      declarations: [ LessonsListComponent ],
      providers: [{ provide: LessonsService, useValue: lessonServiceStub }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get lessons on ngOnInit', () => {
    expect(lessonServiceStub.getLessons).toHaveBeenCalled();
  });

  it('should call delete lesson method', () => {
    component.deleteLesson(1);

    expect(lessonServiceStub.deleteLessonById).toHaveBeenCalled();
  });
});
