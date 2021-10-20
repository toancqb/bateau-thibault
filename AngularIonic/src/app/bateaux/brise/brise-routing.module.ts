import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrisePage } from './brise.page';

const routes: Routes = [
  {
    path: '',
    component: BrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrisePageRoutingModule {}
