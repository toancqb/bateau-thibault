import { Component, OnInit } from '@angular/core';
import { CartInterface, STORAGE_KEY } from 'src/app/interfaces';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  modify: string = 'Modifiez la quantite en tappant sur chaque produit';
  iconSrc: string = 'poulpe.png';
  priceTotal: number;

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    if (!this.produitService.isLoaded) {
      this.produitService.mapData(); 
      this.produitService.isLoaded = true;
    }       
    this.priceTotal = this.produitService.totalPrice;
  }  

  getUrl(name: string) {
    return '../../assets/icon/' + name;
  } 

  onClickAdd(item: CartInterface) {
    item.quantity += 1;
    this.priceTotal += item.item.price;
  }

  onClickSub(item: CartInterface) {
    item.quantity -= 1;
    this.priceTotal -= item.item.price;
  }

  getPriceTotal() {
    this.priceTotal = 0;
    this.produitService.carts.forEach(v => {
      this.priceTotal += v.quantity * v.item.price;
    });     
  }
}
