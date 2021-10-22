import { Component, OnInit } from '@angular/core';
import { CartInterface, ProduitInterface, STORAGE_KEY } from 'src/app/interfaces';
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
      this.mapData(); 
      this.produitService.isLoaded = true;
    }       
    this.getPriceTotal();
  }

  async mapData() {
    await this.produitService.getStorage(STORAGE_KEY).then(value => {      
      value.forEach((v,k) => {
        this.produitService.carts.push({
          "item": this.produitService.getProduit(k)[0],
          "quantity": v
        });
      });
    });

    this.produitService.carts = this.produitService.carts.filter(c => c.item != null);    
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
