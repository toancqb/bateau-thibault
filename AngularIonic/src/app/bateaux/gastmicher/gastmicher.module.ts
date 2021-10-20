import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastmicherPageRoutingModule } from './gastmicher-routing.module';

import { GastmicherPage } from './gastmicher.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastmicherPageRoutingModule
  ],
  declarations: [GastmicherPage, PageCommonComponent]
})
export class GastmicherPageModule {}
