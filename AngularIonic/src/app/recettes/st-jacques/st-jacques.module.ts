import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StJacquesPageRoutingModule } from './st-jacques-routing.module';

import { StJacquesPage } from './st-jacques.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StJacquesPageRoutingModule
  ],
  declarations: [StJacquesPage, PageCommonComponent]
})
export class StJacquesPageModule {}
