import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-common',
  templateUrl: './page-common.component.html',
  styleUrls: ['./page-common.component.scss'],
})
export class PageCommonComponent implements OnInit {

  @Input() title: string;
  @Input() img: string;
  @Input() contents: string[];

  constructor() { }

  ngOnInit() {}

}
