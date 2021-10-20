import { Component, OnInit } from '@angular/core';

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
      "icon": "desGascons_icon.png",
      "title": "Bistrot des Gascons",
      "path": "restaurants/gascons"
    },
    {
      "icon": "fousDeLIle_icon.png",
      "title": "Les fous de l'ile",
      "path": "fous-de-l-ile"
    },
    {
      "icon": "bistrotLandais_icon.png",
      "title": "Bistrot Landais",
      "path": "landais"
    },
    {
      "icon": "villa9Trois_icon.png",
      "title": "Villa 9-Trois",
      "path": "neuf-trois"
    },
    {
      "icon": "duSommelier_icon.png",
      "title": "Bistrot du Sommelier",
      "path": "sommelier"
    },
    {
      "icon": "duSommelier_icon.png",
      "title": "Devenez partenaire!",
      "path": "partenaire"
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

