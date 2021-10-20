import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-jacques',
  templateUrl: './st-jacques.page.html',
  styleUrls: ['./st-jacques.page.scss'],
})
export class StJacquesPage implements OnInit {

  title: string = "Noix de Saint-Jacques flambées au cognac";

  imgUrl: string = "../../../assets/imgs/saintJacques.png";

  contents: string[] = ['Faire fondre du beurre avec des échalottes pui ajouter les noix de Saint-Jacques. Les faire revenir en laissant le milieu puis les retirer du feu.',
  'Ajouter l ail et le persil dans la poele et laisser cuire quelques secondes. Bien faire chauffer la poele puis flamber au Cognac. Une fois la flamme eteinte ajouter les noix de Saint-Jacques (il ne faut pas les flamber cer elles perdraientleur saveur).',
  'Déguster chaud nature ou accompagné d une fondue de poireaux'];

  constructor() { }

  ngOnInit() {
  }

}
