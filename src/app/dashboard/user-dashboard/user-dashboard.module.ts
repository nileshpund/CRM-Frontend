import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserStatisticsModule } from './user-statistics/user-statistics.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    UserStatisticsModule
  ]
})
export class UserDashboardModule { }
