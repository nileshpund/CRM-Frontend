import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { UserPropertiesModule } from './user-properties/user-properties.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    UserPropertiesModule
  ]
})
export class PropertiesModule { }
