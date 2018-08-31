import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchInputText: new FormControl('')
  });

  ngOnInit() {
    this.searchForm.controls.searchInputText.valueChanges
      .pipe(debounceTime(300))
      .pipe(filter((value: string) => value.length >= 3 || value === ''))
      .subscribe((value: string) => {
        this.searchEvent.emit(value);
      });
  }
}
