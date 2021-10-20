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
      "icon": "",
      "title": "Bistrot des Gascons",
      "path": "gascons"
    },
    {
      "icon": "",
      "title": "Les fous de l'ile",
      "path": "fous-de-l-ile"
    },
    {
      "icon": "",
      "title": "Bistrot Landais",
      "path": "landais"
    },
    {
      "icon": "",
      "title": "Villa 9-Trois",
      "path": "neuf-trois"
    },
    {
      "icon": "",
      "title": "Bistrot du Sommelier",
      "path": "sommelier"
    },
    {
      "icon": "",
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

