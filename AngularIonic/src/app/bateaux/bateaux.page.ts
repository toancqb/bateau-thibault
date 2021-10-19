import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  title: string = "Nos bateaux partenaires";

  pageContent: string[] = [
    'Tous les eaux menent a Thibault',
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
      "icon": "saphir_icon.png",
      "title": "Saphir",
      "path": "saphir"
    },
    {
      "icon": "gastMicher_icon.png",
      "title": "Gast Micher",
      "path": "gast-micher"
    },
    {
      "icon": "aquilon_icon.png",
      "title": "Aquilon",
      "path": "aquilon"
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
