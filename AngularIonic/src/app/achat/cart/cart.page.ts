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
  carts: CartInterface[] = [];
  iconSrc: string = 'poulpe.png';

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.mapData();
  }

  async mapData() {
    await this.produitService.getStorage(STORAGE_KEY).then(value => {      
      value.forEach((v,k) => {
        this.carts.push({
          "item": this.produitService.getProduit(k)[0],
          "quantity": v
        });
      });
    });

    this.carts = this.carts.filter(c => c.item != null);
    console.log(this.carts);
  } 

  getUrl(name: string) {
    return '../../assets/icon/' + name;
  } 

  onClickAdd(item: CartInterface) {
    item.quantity += 1;
  }

  onClickSub(item: CartInterface) {
    item.quantity -= 1;
  }

}
