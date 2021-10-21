import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatPage } from './achat.page';

const routes: Routes = [
  {
    path: '',
    component: AchatPage
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatPageRoutingModule {}
