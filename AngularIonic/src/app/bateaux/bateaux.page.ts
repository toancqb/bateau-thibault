import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ButtonsInterface } from '../interfaces';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  navigationExtras: NavigationExtras;

  title: string = "Nos bateaux partenaires";

  pageContent: string[] = [
    'Tous les eaux menent a Thibault',
    '06.63.99.99.78',
    'lebateaudethibault@gmail.com',
    'www.facebook.com/lebateaudethibault'
  ];

  public buttonsContent: ButtonsInterface[] = [
    {
      "name": "brise",
      "detail": {
        "icon": "deLaBrise_icon.png",
        "img": "deLaBrise.png",
        "title": "De la Brise",
        "path": "de-la-brise",
        "contents": [""]
      }
    },
    {
      "name": "saphir",
      "detail": {
        "icon": "saphir_icon.png",
        "img": "saphir.png",
        "title": "Saphir",
        "path": "saphir",
        "contents": [""]
      }
    },
    {
      "name": "gastmicher",
      "detail": {
        "icon": "gastMicher_icon.png",
        "img": "gastMicher.png",
        "title": "Gast Micher",
        "path": "gast-micher",
        "contents": [""]
      }
    },
    {
      "name": "aquilon",
      "detail": {
        "icon": "aquilon_icon.png",
        "img": "aquilon.png",
        "title": "Aquilon",
        "path": "aquilon",
        "contents": [""]
      }
    },
    {
      "name": "contact",
      "detail": {
        "icon": "tourteau.png",
        "img": "TIG.png",
        "title": "Contact",
        "path": "contact",
        "contents": [""]
      }
    },
    {
      "name": "contact",
      "detail": {
        "icon": "tourteau.png",
        "img": "TIG.png",
        "title": "Contact",
        "path": "contact",
        "contents": [""]
      }
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

}