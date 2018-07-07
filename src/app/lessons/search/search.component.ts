import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchInputText: string;

  search() {
    this.searchEvent.emit(this.searchInputText);
  }
}
