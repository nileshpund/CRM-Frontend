import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
     children: [
       {
        path: '',
        redirectTo: 'user-statistics',
        pathMatch: 'full'
      },
      {
        path:'leads',
        loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule)
      },
      {
        path:'properties',
        loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule)
      },
      {
        path:'user-statistics',
        loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
      },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
