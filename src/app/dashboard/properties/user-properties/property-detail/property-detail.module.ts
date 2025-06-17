import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDetailRoutingModule } from './property-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PropertyDetailComponent } from './property-detail.component';


@NgModule({
  declarations: [PropertyDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyDetailRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PropertyDetailModule { }
