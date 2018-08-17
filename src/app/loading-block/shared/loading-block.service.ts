import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {
  private isVisibleLoaderSource = new Subject();
  isVisibleLoader = this.isVisibleLoaderSource.asObservable();

  constructor() {}

  showLoader() {
    this.isVisibleLoaderSource.next(true);
  }

  hideLoader() {
    this.isVisibleLoaderSource.next(false);
  }
}
