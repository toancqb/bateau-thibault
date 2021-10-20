import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasconsPageRoutingModule } from './gascons-routing.module';

import { GasconsPage } from './gascons.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasconsPageRoutingModule
  ],
  declarations: [GasconsPage, PageCommonComponent]
})
export class GasconsPageModule {}
