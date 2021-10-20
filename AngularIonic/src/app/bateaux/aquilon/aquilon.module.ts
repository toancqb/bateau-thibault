import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquilonPageRoutingModule } from './aquilon-routing.module';

import { AquilonPage } from './aquilon.page';
import { PageCommonComponent } from 'src/app/component/page-common/page-common.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquilonPageRoutingModule
  ],
  declarations: [AquilonPage,PageCommonComponent]
})
export class AquilonPageModule {}
