import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPropertiesComponent } from './user-properties.component';

const routes: Routes = [
  {
    path:'',
    component: UserPropertiesComponent
  },
  {
    path:'details',
    loadChildren: () => import('./property-detail/property-detail.module').then(m => m.PropertyDetailModule)
  },
  {
    path:'add',
    loadChildren: () => import('./add-property/add-property.module').then(m => m.AddPropertyModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPropertiesRoutingModule { }
