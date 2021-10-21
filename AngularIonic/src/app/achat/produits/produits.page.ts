import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { CartInterface, CHOOSE, ProduitInterface, STORAGE_KEY } from 'src/app/interfaces';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  name: string;
  produits: ProduitInterface[];
  iconUrl = 'poulpe.png';
  choose: string = CHOOSE;

  constructor(private route: ActivatedRoute, private router: Router, private produitService: ProduitService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.name = this.router.getCurrentNavigation().extras.state.name;
        this.produits = this.router.getCurrentNavigation().extras.state.detail;
      }
    });    
    
    this.setVisibilitySelected();
  }

  private setVisibilitySelected() {
    //delete this line in Product
    //this.produitService.clearStorage();
    this.produitService.getStorage(STORAGE_KEY).then( value => {
      value.forEach((v,k) => {
        let pElem = document.getElementById("selected" + k);
        if (pElem != null)
          document.getElementById("selected" + k).style.visibility = "visible";
      });
    });
  }

  async onClickProduit(produit: ProduitInterface) {
    await this.produitService.getStorage(STORAGE_KEY).then( value => {      
      if (!value.has(produit.id)) {
        value.set(produit.id, 1);
        this.produitService.setStorage(STORAGE_KEY, value);
      }
    });
    
    this.produitService.getStorage(STORAGE_KEY).then(va => {
      console.log("-----------------------------");
      va.forEach((v,k) => {
        console.log(k, v);
      });
      console.log("-----------------------------");
    });

    document.getElementById("selected" + produit.id).style.visibility = "visible";
  }  

  getUrl(name: string) {
    return '../../assets/icon/' + name;
  }   

}
