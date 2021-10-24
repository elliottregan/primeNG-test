import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-share-panel',
  templateUrl: './share-panel.component.html',
  styleUrls: ['./share-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SharePanelComponent implements OnInit {
  closeIcon = 'acorn';

  constructor() { }

  ngOnInit(): void {
  }

}
