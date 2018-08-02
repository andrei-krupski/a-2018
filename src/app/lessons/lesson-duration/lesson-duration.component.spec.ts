import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDurationComponent } from './lesson-duration.component';

describe('LessonDurationComponent', () => {
  let component: LessonDurationComponent;
  let fixture: ComponentFixture<LessonDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
