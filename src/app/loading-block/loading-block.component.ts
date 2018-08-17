import { Component, OnInit } from '@angular/core';

import { LoadingBlockService } from './shared/loading-block.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.styl']
})
export class LoadingBlockComponent implements OnInit {
  isVisibleLoader = false;

  constructor(private loadingBlockService: LoadingBlockService) {}

  ngOnInit() {
    this.loadingBlockService.isVisibleLoader.subscribe((result: boolean) => this.isVisibleLoader = result);
  }

}
