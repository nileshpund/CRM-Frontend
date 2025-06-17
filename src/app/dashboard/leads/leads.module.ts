import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { UserLeadsModule } from './user-leads/user-leads.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    UserLeadsModule,
  ]
})
export class LeadsModule { }
