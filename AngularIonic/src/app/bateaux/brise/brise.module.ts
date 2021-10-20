import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrisePageRoutingModule } from './brise-routing.module';

import { BrisePage } from './brise.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrisePageRoutingModule
  ],
  declarations: [BrisePage, PageCommonComponent]
})
export class BrisePageModule {}
