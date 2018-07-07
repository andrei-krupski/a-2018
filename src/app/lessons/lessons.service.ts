import { Injectable } from '@angular/core';

// @TODO
const lessonsData = [
  {
    id: 1,
    title: 'Video Course 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 65,
    creationDate: '06-05-2018',
    topRated: true
  },
  {
    id: 2,
    title: 'Video Course 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 57,
    creationDate: '06-13-2018',
    topRated: false
  },
  {
    id: 3,
    title: 'Video Course 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 76,
    creationDate: '06-19-2018',
    topRated: true
  },
  {
    id: 4,
    title: 'Video Course 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 233,
    creationDate: '06-26-2018',
    topRated: false
  },
  {
    id: 5,
    title: 'Video Course 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 52,
    creationDate: '07-04-2018',
    topRated: false
  },
  {
    id: 6,
    title: 'Video Course 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    duration: 77,
    creationDate: '07-15-2018',
    topRated: false
  }
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
