import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  searchInputText: string;
  searchInputObsSourse = new Subject();
  private searchInputObs = this.searchInputObsSourse.asObservable();

  ngOnInit() {
    this.searchInputObs
      .pipe(debounceTime(300))
      .pipe(filter((value: string) => value.length >= 3 || value === ''))
      .subscribe((value: string) => {
        this.searchEvent.emit(this.searchInputText);
      });
  }
}
