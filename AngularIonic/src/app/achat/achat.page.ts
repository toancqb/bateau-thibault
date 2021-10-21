import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AchatInterface } from '../interfaces';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  iconSrc: string = 'poulpe@3x.png';
  produits: any;
  buttonContents: AchatInterface[];

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit() {
    this.produitService.getData().subscribe(res => {
      this.produits = res;
      this.produitService.sortProduits(this.produits);
      /*console.log("Poissons: ", this.produitService.poissons);
      console.log("Coquillages: ", this.produitService.coquillages);
      console.log("Crustaces: ", this.produitService.crustaces);
      console.log("Promotions: ", this.produitService.promotions);*/

      this.buttonContents = [
        {
          "name": "poissons",
          "detail": this.produitService.poissons
        },
        {
          "name": "coquillages",
          "detail": this.produitService.coquillages
        },
        {
          "name": "crustaces",
          "detail": this.produitService.crustaces
        },
        {
          "name": "promotions",
          "detail": this.produitService.promotions
        }
      ]

    },
    (err) => {
      alert('failed loading json data');
    });
  }

  getContent(name: string): AchatInterface {
    for(let i = 0;i < this.buttonContents.length; i++) {
      if (this.buttonContents[i].name === name)
        return this.buttonContents[i];
    }
    return null;
  }

  onLoadProduits(name: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        name: name, 
        detail: this.getContent(name).detail
      }
    };
    this.router.navigate(['/achat/produits'], navigationExtras);
  }

  getUrl(name: string): string {
    return '../../assets/icon/' + name;
  }

}
