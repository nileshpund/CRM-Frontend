import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLeadsComponent } from './user-leads/user-leads.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./user-leads/user-leads.module').then(m => m.UserLeadsModule)
  },
  {
    path: "add-leads",
    loadChildren: () => import('./add-leads/add-leads.module').then(m => m.AddLeadsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
