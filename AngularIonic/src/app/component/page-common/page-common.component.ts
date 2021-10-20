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
  @Input() poem: string[];
  @Input() happiness: string;

  constructor() { }

  ngOnInit() {}

  getImgUrl(name: string): string {
    return '../../assets/imgs/' + name;
  }

}
