import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette-xyz',
  templateUrl: './recette-xyz.page.html',
  styleUrls: ['./recette-xyz.page.scss'],
})
export class RecetteXYZPage implements OnInit {

  title: string = "Recette XYZ";

  imgUrl: string = "../../../assets/imgs/poulpe@2x.png";

  contents: string[]=['XXX YYY ZZZ',
      'Qu il est chaud le soleil',
      'Quand nous sommes en vacances',
      'Y a d la joie des hirondelles',
      'C est le sud de la France',
      'Papa bricole au garage',
      'Maman lit dans la chaise longue',
      'Dans le joli paysage',
      'Moi je me balade en longe',
      'Que du bonheur!',
      'Que du bonheur!']

  constructor() { }

  ngOnInit() {
  }

}
