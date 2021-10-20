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
        "contents": [
          'Faites cuire les homards dans l eau bouillante avec du thym du laurier du sel et du poivre de Cayenne. Laissez cuire 20 minutes. Egoutez-les et laissez-les refoidir.',
          'Découpez les coffres des homards dans le sens de la longueur.',
          'Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée'
        ]
      }
    },
    {
      "name": "stjacques",
      "detail": {
        "icon": "saintJacques_icon.png",
        "title": "St Jacques",
        "img": "saintJacques.png",
        "path": "stjacques",
        "contents": ['Faire fondre du beurre avec des échalottes pui ajouter les noix de Saint-Jacques. Les faire revenir en laissant le milieu puis les retirer du feu.',
        'Ajouter l ail et le persil dans la poele et laisser cuire quelques secondes. Bien faire chauffer la poele puis flamber au Cognac. Une fois la flamme eteinte ajouter les noix de Saint-Jacques (il ne faut pas les flamber cer elles perdraientleur saveur).',
        'Déguster chaud nature ou accompagné d une fondue de poireaux']
      }
    },
    {
      "name": "bar",
      "detail": {
        "icon": "barRecette_icon.png",
        "img": "barRecette.png",
        "title": "Bar",
        "path": "bar",
        "contents": ['Sur une plaque ou un plat allant au four disposer quelques feuilles de laurier frais verser un filer d huile d olive et du gros sel. Disposer le bar puis l arroser d un filet d huile d olive et mettre un peu de gros sel sur la peau','Cuire au four pendant 12 min à 240°C']
      }
    },
    {
      "name": "tourteau",
      "detail": {
        "icon": "poulpe.png",
        "img": "poulpe.png",
        "title": "Tourteau",
        "path": "tourteau",
        "contents": ['XXX YYY ZZZ',
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
      }
    },
    {
      "name": "recette",
      "detail": {
        "icon": "poulpe.png",
        "img": "tourteau.png",
        "title": "Recette",
        "path": "recette",
        "contents": ['XXX YYY ZZZ',
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
      }
    },
    {
      "name": "recette",
      "detail": {
        "icon": "poulpe.png",
        "img": "tourteau.png",
        "title": "Recette",
        "path": "recette",
        "contents": ['XXX YYY ZZZ',
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
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}