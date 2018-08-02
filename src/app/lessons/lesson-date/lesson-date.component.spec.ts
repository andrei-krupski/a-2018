import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDateComponent } from './lesson-date.component';

describe('LessonDateComponent', () => {
  let component: LessonDateComponent;
  let fixture: ComponentFixture<LessonDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
