import { Component, OnInit } from '@angular/core';
import { ButtonsInterface } from '../interfaces';

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
      "name": "homard",
      "detail": {
        "icon": "homardRecette_icon.png",
        "img": "homardRecette.png",
        "title": "Homard",
        "path": "homard",
        "contents": [""]
      }
    },
    {
      "name": "stjacques",
      "detail": {
        "icon": "saintJacques_icon.png",
        "title": "St Jacques",
        "img": "saintJacques.png",
        "path": "stjacques",
        "contents": [""]
      }
    },
    {
      "name": "bar",
      "detail": {
        "icon": "barRecette_icon.png",
        "img": "barRecette.png",
        "title": "Bar",
        "path": "bar",
        "contents": [""]
      }
    },
    {
      "name": "tourteau",
      "detail": {
        "icon": "poulpe.png",
        "img": "poulpe.png",
        "title": "Tourteau",
        "path": "tourteau",
        "contents": [""]
      }
    },
    {
      "name": "recette",
      "detail": {
        "icon": "poulpe.png",
        "img": "tourteau.png",
        "title": "Recette",
        "path": "recette",
        "contents": [""]
      }
    },
    {
      "name": "recette",
      "detail": {
        "icon": "poulpe.png",
        "img": "tourteau.png",
        "title": "Recette",
        "path": "recette",
        "contents": [""]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}