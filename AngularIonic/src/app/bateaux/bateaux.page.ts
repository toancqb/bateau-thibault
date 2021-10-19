import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  pageContent: string[] = [
    'Vente en direct de notre bateau',
    'Produits selon la saison, Livraisons sur Paris',
    '06.63.99.99.78',
    'lebateaudethibault@gmail.com',
    'www.facebook.com/lebateaudethibault'
  ];

  public buttonsContent: ButtonsInterface[] = [
    {
      "icon": "deLaBrise_icon.png",
      "title": "De la Brise",
      "path": "de-la-brise"
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
    {
      "icon": "tourteau.png",
      "title": "Contact",
      "path": "contact"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ButtonsInterface {
  icon: string,
  title: string,
  path: string
}
