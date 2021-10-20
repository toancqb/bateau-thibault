import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasconsPage } from './gascons.page';

const routes: Routes = [
  {
    path: '',
    component: GasconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasconsPageRoutingModule {}
