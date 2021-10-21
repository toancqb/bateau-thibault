import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  imgSrc: string;
  iconHome: string;
  iconCart: string;

  constructor() { 
    this.imgSrc = '../../../assets/imgs/navbarbg.png';
    this.iconHome = '../../../assets/icon/homeLogo.png';
    this.iconCart = '../../../assets/icon/cartLogo.png';
  }

  ngOnInit() {}
  
}
