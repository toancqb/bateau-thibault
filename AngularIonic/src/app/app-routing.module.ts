import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./bateaux/saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'de-la-brise',
    loadChildren: () => import('./bateaux/brise/brise.module').then( m => m.BrisePageModule)
  },
  {
    path: 'gast-micher',
    loadChildren: () => import('./bateaux/gastmicher/gastmicher.module').then( m => m.GastmicherPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./bateaux/aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'homard',
    loadChildren: () => import('./recettes/homard/homard.module').then( m => m.HomardPageModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./recettes/bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'stjacques',
    loadChildren: () => import('./recettes/st-jacques/st-jacques.module').then( m => m.StJacquesPageModule)
  },
  {
    path: 'tourteau',
    loadChildren: () => import('./recettes/tourteau/tourteau.module').then( m => m.TourteauPageModule)
  },
  {
    path: 'recettexyz',
    loadChildren: () => import('./recettes/recette-xyz/recette-xyz.module').then( m => m.RecetteXYZPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
