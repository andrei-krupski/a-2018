import { Injectable } from '@angular/core';

// @TODO
const lessonsData = [
  {
    id: 1,
    title: 'Video Course 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: new Date()
  },
  {
    id: 2,
    title: 'Video Course 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: new Date()
  },
  {
    id: 3,
    title: 'Video Course 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: new Date()
  },
  {
    id: 4,
    title: 'Video Course 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: new Date()
  },
  {
    id: 5,
    title: 'Video Course 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: new Date()
  },
];

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  constructor() {}

  getLessons() {
    return lessonsData;
  }

  deleteLessonById(id) {
    console.log(id);
  }
}
