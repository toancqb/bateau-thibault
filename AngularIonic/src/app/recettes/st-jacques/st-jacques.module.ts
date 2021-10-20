import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StJacquesPageRoutingModule } from './st-jacques-routing.module';

import { StJacquesPage } from './st-jacques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StJacquesPageRoutingModule
  ],
  declarations: [StJacquesPage]
})
export class StJacquesPageModule {}
