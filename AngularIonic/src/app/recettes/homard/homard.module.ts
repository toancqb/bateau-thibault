import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomardPageRoutingModule } from './homard-routing.module';

import { HomardPage } from './homard.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomardPageRoutingModule
  ],
  declarations: [HomardPage, PageCommonComponent]
})
export class HomardPageModule {}
