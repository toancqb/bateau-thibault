import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourteauPageRoutingModule } from './tourteau-routing.module';

import { TourteauPage } from './tourteau.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourteauPageRoutingModule
  ],
  declarations: [TourteauPage, PageCommonComponent]
})
export class TourteauPageModule {}
