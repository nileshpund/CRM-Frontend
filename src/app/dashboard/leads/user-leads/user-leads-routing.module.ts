import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLeadsComponent } from './user-leads.component';

const routes: Routes = [
  {
    path:'',
    component: UserLeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLeadsRoutingModule { }
