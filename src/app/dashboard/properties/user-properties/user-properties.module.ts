import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPropertiesRoutingModule } from './user-properties-routing.module';
import { UserPropertiesComponent } from './user-properties.component';


@NgModule({
  declarations: [UserPropertiesComponent],
  imports: [
    CommonModule,
    UserPropertiesRoutingModule
  ],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class UserPropertiesModule { }
