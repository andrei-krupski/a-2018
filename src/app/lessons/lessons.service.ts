import { Injectable } from '@angular/core';

// @TODO
const lessonsData = [
  {
    id: 1,
    title: 'Video Course 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: '06-05-2018'
  },
  {
    id: 2,
    title: 'Video Course 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: '06-13-2018'
  },
  {
    id: 3,
    title: 'Video Course 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: '06-19-2018'
  },
  {
    id: 4,
    title: 'Video Course 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: '06-26-2018'
  },
  {
    id: 5,
    title: 'Video Course 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: '1h 30min',
    creationDate: '06-26-2018'
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
