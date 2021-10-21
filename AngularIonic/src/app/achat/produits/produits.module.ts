import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';
import { HeaderComponent } from 'src/app/component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsPageRoutingModule
  ],
  declarations: [ProduitsPage, HeaderComponent]
})
export class ProduitsPageModule {}
