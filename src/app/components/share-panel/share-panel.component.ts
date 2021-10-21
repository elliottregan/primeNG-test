import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-share-panel',
  templateUrl: './share-panel.component.html',
  styleUrls: ['./share-panel.component.scss']
})
export class SharePanelComponent implements OnInit {
  closeIcon = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
