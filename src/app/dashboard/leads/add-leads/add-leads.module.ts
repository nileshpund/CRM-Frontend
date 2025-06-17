import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLeadsRoutingModule } from './add-leads-routing.module';
import { AddLeadsComponent } from './add-leads.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AddLeadsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddLeadsRoutingModule
  ]
})
export class AddLeadsModule { }
