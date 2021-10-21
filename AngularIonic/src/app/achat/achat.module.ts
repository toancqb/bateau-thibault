import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatPageRoutingModule } from './achat-routing.module';

import { AchatPage } from './achat.page';
import { HeaderComponent } from '../component/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatPageRoutingModule    
  ],
  declarations: [AchatPage, HeaderComponent]
})
export class AchatPageModule {}
