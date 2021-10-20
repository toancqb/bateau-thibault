import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesPageRoutingModule } from './recettes-routing.module';

import { RecettesPage } from './recettes.page';
import { PageMainComponent } from '../component/page-main/page-main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesPageRoutingModule
  ],
  declarations: [RecettesPage, PageMainComponent]
})
export class RecettesPageModule {}
