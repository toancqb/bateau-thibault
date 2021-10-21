import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ProduitInterface } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  cart: string[];
  totalPrice$: Subject<number>;
  totalPrice: number;

  poissons: ProduitInterface[];
  coquillages: ProduitInterface[];
  crustaces: ProduitInterface[];
  promotions: ProduitInterface[];

  constructor(public http: HttpClient) {
    this.cart = [];
    this.totalPrice$ = new Subject<number>();
    this.totalPrice = 0;
  }

  getData(): Observable<Object> {
    return this.http.get('../assets/data/produits.json');
  }

  sortProduits(produits: ProduitInterface[]) {
    this.poissons = produits.filter(p => p.category === 0);
    this.coquillages = produits.filter(p => p.category === 1);
    this.crustaces = produits.filter(p => p.category === 2);
    this.promotions = produits.filter(p => p.discount > 0);
  }
}
