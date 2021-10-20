import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  title: string = "Nos recettes";

  pageContent: string[] = [
    'Tous les recettes du bateau de Thibault',
    '06.63.99.99.78',
    'lebateaudethibault@gmail.com',
    'www.facebook.com/lebateaudethibault'
  ];

  public buttonsContent: ButtonsInterface[] = [
    {
      "icon": "homardRecette_icon.png",
      "title": "Homard",
      "path": "homard"
    },
    {
      "icon": "saintJacques_icon.png",
      "title": "St Jacques",
      "path": "stjacques"
    },
    {
      "icon": "barRecette_icon.png",
      "title": "Bar",
      "path": "bar"
    },
    {
      "icon": "poulpe.png",
      "title": "Tourteau",
      "path": "tourteau"
    },
    {
      "icon": "poulpe.png",
      "title": "Recette",
      "path": "recettexyz"
    },
    {
      "icon": "poulpe.png",
      "title": "Recette",
      "path": "recette"
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
