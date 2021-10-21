import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  cart: string[];
  totalPrice$: Subject<number>;
  totalPrice: number;

  constructor(public http: HttpClient) {
    this.cart = [];
    this.totalPrice$ = new Subject<number>();
    this.totalPrice = 0;
  }

  getData(): Observable<Object> {
    return this.http.get('../assets/data/produits.json');
  }
}
