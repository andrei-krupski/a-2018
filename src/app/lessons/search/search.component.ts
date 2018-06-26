import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  searchInputText: string;

  constructor() {}

  ngOnInit() {}

  search() {
    console.log(this.searchInputText);
  }
}
