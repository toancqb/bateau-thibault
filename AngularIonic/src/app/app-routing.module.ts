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
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
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
