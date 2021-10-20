import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StJacquesPage } from './st-jacques.page';

const routes: Routes = [
  {
    path: '',
    component: StJacquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StJacquesPageRoutingModule {}
