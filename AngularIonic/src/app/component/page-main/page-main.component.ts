import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
})
export class PageMainComponent {

  @Input() title: string;
  @Input() pageContent: string[];
  @Input() buttonsContent: ButtonsInterface[];

  

  constructor(private router: Router) {}

  onClickContact(name: string) {
    this.router.navigate(['/' + name]);
  }

  getUrl(name: string): string {
    return '../../assets/icon/' + name; 
  }

}

export interface ButtonsInterface {
  icon: string,
  title: string,
  path: string
}