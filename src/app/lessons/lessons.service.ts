import { Injectable } from '@angular/core';
import { createAotUrlResolver } from '@angular/compiler';

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

  getLessonById(id) {
    return lessonsData.find(lesson => lesson.id === parseInt(id, 0));
  }

  deleteLessonById(id) {
    let courseIndex;

    lessonsData.find((course, index) => {
      if (course.id === id) {
        courseIndex = index;
        return true;
      }

      return false;
    });

    if (courseIndex !== undefined) {
      lessonsData.splice(courseIndex, 1);
    }
  }

  createLesson(data) {
    lessonsData.push({
      id: lessonsData.length + 1,
      title: data.title || '',
      description: data.description || '',
      duration: data.duration || 0,
      creationDate: data.creationDate || '',
      topRated: data.topRated || false
    });
  }

  updateLesson(data) {
    Object.assign(lessonsData.find(lesson => lesson.id === parseInt(data.id, 0)), data);
  }
}
