import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeadsComponent } from './add-leads.component';

const routes: Routes = [
  {
    path:'',
    component:AddLeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLeadsRoutingModule { }
