import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  iconSrc: string = 'poulpe@3x.png';
  produits: any;

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produitService.getData().subscribe(res => {
      this.produits = res;
      //console.log(this.produits);
    },
    (err) => {
      alert('failed loading json data');
    });
  }

  getUrl(name: string): string {
    return '../../assets/icon/' + name; 
  }

}
