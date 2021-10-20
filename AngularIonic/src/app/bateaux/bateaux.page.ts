import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ButtonsInterface, TEXT_CONTENT } from '../interfaces';

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
        "contents": TEXT_CONTENT
      }
    },
    {
      "name": "saphir",
      "detail": {
        "icon": "saphir_icon.png",
        "img": "saphir.png",
        "title": "Saphir",
        "path": "saphir",
        "contents": TEXT_CONTENT
      }
    },
    {
      "name": "gastmicher",
      "detail": {
        "icon": "gastMicher_icon.png",
        "img": "gastMicher.png",
        "title": "Gast Micher",
        "path": "gast-micher",
        "contents": TEXT_CONTENT
      }
    },
    {
      "name": "aquilon",
      "detail": {
        "icon": "aquilon_icon.png",
        "img": "aquilon.png",
        "title": "Aquilon",
        "path": "aquilon",
        "contents": TEXT_CONTENT
      }
    },
    {
      "name": "contact",
      "detail": {
        "icon": "tourteau.png",
        "img": "TIG.png",
        "title": "Contact",
        "path": "contact",
        "contents": TEXT_CONTENT
      }
    },
    {
      "name": "contact",
      "detail": {
        "icon": "tourteau.png",
        "img": "TIG.png",
        "title": "Contact",
        "path": "contact",
        "contents": ['06.63.99.99.78','lebateaudethibault@gmail.com','www.facebook.com/lebateaudethibault',
                    'Qu il est chaud le soleil','Quand nous sommes en vacances','Y a d la joie des hirondelles','C est le sud de la France','Papa bricole au garage','Maman lit dans la chaise longue','Dans le joli paysage','Moi je me balade en longe',
        'Que du bonheur!']
      }
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

}