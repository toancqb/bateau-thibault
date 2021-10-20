import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteXYZPageRoutingModule } from './recette-xyz-routing.module';

import { RecetteXYZPage } from './recette-xyz.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteXYZPageRoutingModule
  ],
  declarations: [RecetteXYZPage, PageCommonComponent]
})
export class RecetteXYZPageModule {}
