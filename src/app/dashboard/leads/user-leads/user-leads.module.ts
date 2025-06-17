import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLeadsRoutingModule } from './user-leads-routing.module';
import { UserLeadsComponent } from './user-leads.component';


@NgModule({
  declarations: [UserLeadsComponent],
  imports: [
    CommonModule,
    UserLeadsRoutingModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class UserLeadsModule { }
