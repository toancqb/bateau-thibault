import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  imgSrc: string;
  iconHome: string;
  iconCart: string;

  constructor(private route: Router) { 
    this.imgSrc = '../../../assets/imgs/navbarbg.png';
    this.iconHome = '../../../assets/icon/homeLogo.png';
    this.iconCart = '../../../assets/icon/cartLogo.png';
  }

  ngOnInit() {}

  onLoadHome() {
    this.route.navigate(['/']);
  }

  onLoadCart() {
    this.route.navigate(['/achat/cart']);
  }
  
}
