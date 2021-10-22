import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CartInterface, ProduitInterface, STORAGE_KEY } from './interfaces';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  carts: CartInterface[];
  totalPrice$: Subject<number>;
  totalPrice: number;
  isLoaded: boolean = false;

  poissons: ProduitInterface[];
  coquillages: ProduitInterface[];
  crustaces: ProduitInterface[];
  promotions: ProduitInterface[];
  produits: ProduitInterface[];

  private _storage: Storage | null = null;

  constructor(public http: HttpClient, private storage: Storage) {
    this.init();
    
    this.carts = [];
    this.totalPrice$ = new Subject<number>();
    this.totalPrice = 0;
    this.mapData();
  }

  async init() {
    this._storage = await this.storage.create();
    if (this._storage.get(STORAGE_KEY) == null) {
      let newCart: Map<number, number> = new Map();
      this._storage.set(STORAGE_KEY, newCart);
    }    
  }

  setStorage(key: string, value: any) {
    this._storage?.set(key, value);
  }

  getStorage(key: string): any {
    return this._storage.get(key);
  }

  clearStorage() {
    let newCart: Map<number, number> = new Map();
    this.setStorage(STORAGE_KEY, newCart);
  }

  getData(): Observable<Object> {
    return this.http.get('../assets/data/produits.json');
  }

  sortProduits(produits: ProduitInterface[]) {
    this.produits = produits;
    this.poissons = produits.filter(p => p.category === 0);
    this.coquillages = produits.filter(p => p.category === 1);
    this.crustaces = produits.filter(p => p.category === 2);
    this.promotions = produits.filter(p => p.sale);
  }

  getProduit(id: number): ProduitInterface[] {
    let lst = this.produits.filter(p => p.id == id);
    return (lst == null)? [null] : lst; 
  }

  getPriceTotal(): number {
    this.totalPrice = 0;
    this.carts.forEach(v => {
      this.totalPrice += v.quantity * v.item.price;
    });
    return this.totalPrice;  
  }

  async mapData() {
    await this.getStorage(STORAGE_KEY).then(value => {      
      value.forEach((v,k) => {
        this.carts.push({
          "item": this.getProduit(k)[0],
          "quantity": v
        });
      });
    });

    this.carts = this.carts.filter(c => c.item != null);    
  } 
}
