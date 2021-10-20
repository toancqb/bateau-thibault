import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { PageCommonComponent } from './page-common.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule    
  ],
  declarations: [TitleComponent, TitleComponent],
  exports: [PageCommonComponent]
})
export class PageCommonModule {}
