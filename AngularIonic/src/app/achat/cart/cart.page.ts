import { Component, OnInit } from '@angular/core';
import { ProduitInterface } from 'src/app/interfaces';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  carts: ProduitInterface[];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
  }

}
