import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ButtonsInterface } from '../../interfaces';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
})
export class PageMainComponent {

  @Input() pageTitle: string;
  @Input() pageContent: string[];
  @Input() buttonsContent: ButtonsInterface[];

  constructor(private router: Router) {}

  onClickContact(name: string) {
    this.router.navigate(['/' + name]);
  }

  private getButtonContent(name: string): ButtonsInterface {
    for(let i = 0;i < this.buttonsContent.length; i++) {
      if (this.buttonsContent[i].name === name) {
        console.log(this.buttonsContent[i]);
        return this.buttonsContent[i];
      }
    }
    console.log("null");
    return null;
  }

  public onLoadDetailPage(name: string): void {
    let navigationExtras: NavigationExtras = {
      state: {
        id: name, 
        buttonContent: this.getButtonContent(name)
      }
    };
    this.router.navigate(['/detail'], navigationExtras);
  }

  getUrl(name: string): string {
    return '../assets/icon/' + name; 
  }
}

