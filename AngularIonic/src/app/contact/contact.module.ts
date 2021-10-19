import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { PageCommonComponent } from '../component/page-common/page-common.component';
import { PageCommonModule } from '../component/page-common/page-common.component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    PageCommonModule
  ],
  declarations: [ContactPage,
    PageCommonComponent]
})
export class ContactPageModule {}
