import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesPage } from './recettes.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesPage
  },
  {
    path: 'homard',
    loadChildren: () => import('./homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'st-jacques',
    loadChildren: () => import('./st-jacques/st-jacques.module').then( m => m.StJacquesPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'recette-xyz',
    loadChildren: () => import('./recette-xyz/recette-xyz.module').then( m => m.RecetteXYZPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPageRoutingModule {}
