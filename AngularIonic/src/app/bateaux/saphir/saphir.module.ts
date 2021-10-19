import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaphirPageRoutingModule } from './saphir-routing.module';

import { SaphirPage } from './saphir.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaphirPageRoutingModule
  ],
  declarations: [SaphirPage, PageCommonComponent]
})
export class SaphirPageModule {}
