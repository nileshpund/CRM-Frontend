import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStatisticsComponent } from './user-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: UserStatisticsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserStatisticsRoutingModule { }
