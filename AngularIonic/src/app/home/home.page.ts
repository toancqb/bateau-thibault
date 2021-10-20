import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public buttonsContent: ButtonsInterface[] = [
    {
      "icon": "poisson.png",
      "title": "Produits et promotions",
      "path": "achat"
    },
    {
      "icon": "ancre.png",
      "title": "Bateaux",
      "path": "bateaux"
    },
    {
      "icon": "restaurant.png",
      "title": "Restaurants",
      "path": "restaurants"
    },
    {
      "icon": "recette.png",
      "title": "Recettes",
      "path": "recettes"
    },
    {
      "icon": "tourteau.png",
      "title": "Contact",
      "path": "contact"
    },
  ];

  constructor(private router: Router) {}

  onClickContact(name: string) {
    this.router.navigate(['/' + name]);
  }

  getUrl(name: string): string {
    return '../../assets/icon/' + name; 
  }

}

interface ButtonsInterface {
  icon: string,
  title: string,
  path: string
}