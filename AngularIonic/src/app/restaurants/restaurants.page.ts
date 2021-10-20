import { Component, OnInit } from '@angular/core';
import { ButtonsInterface } from '../interfaces';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  title: string = "Restaurants partenaires";

  pageContent: string[] = [
    'Tous les restaurants partenaires avec le bateau de Thibault',
    '06.63.99.99.78',
    'lebateaudethibault@gmail.com',
    'www.facebook.com/lebateaudethibault'
  ];

  public buttonsContent: ButtonsInterface[] = [
    {
      "name": "gascons",
      "detail": {
        "icon": "desGascons_icon.png",
        "img": "desGascons.png",
        "title": "Bistrot des Gascons",
        "path": "restaurants/gascons",
        "contents": [""]
      }
    },
    {
      "name": "lile",
      "detail": {
        "icon": "fousDeLIle_icon.png",
        "img": "fousDeLIle.png",
        "title": "Les fous de l'ile",
        "path": "fous-de-l-ile",
        "contents": [""]
      }
    },
    {
      "name": "landais",
      "detail": {
        "icon": "bistrotLandais_icon.png",
        "img": "bistrotLandais.png",
        "title": "Bistrot Landais",
        "path": "landais",
        "contents": [""]
      }
    },
    {
      "name": "neuftrois",
      "detail": {
        "icon": "villa9Trois_icon.png",
        "img": "villa9Trois.png",
        "title": "Villa 9-Trois",
        "path": "neuf-trois",
        "contents": [""]
      }
    },
    {
      "name": "sommelier",
      "detail": {
        "icon": "duSommelier_icon.png",
        "img": "duSommelier.png",
        "title": "Bistrot du Sommelier",
        "path": "sommelier",
        "contents": [""]
      }
    },
    {
      "name": "partenaire",
      "detail": {
        "icon": "duSommelier_icon.png",
        "img": "duSommelier.png",
        "title": "Devenez partenaire!",
        "path": "partenaire",
        "contents": [""]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
