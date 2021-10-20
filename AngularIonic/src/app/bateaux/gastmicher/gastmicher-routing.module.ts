import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastmicherPage } from './gastmicher.page';

const routes: Routes = [
  {
    path: '',
    component: GastmicherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastmicherPageRoutingModule {}
