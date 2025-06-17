import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStatisticsRoutingModule } from './user-statistics-routing.module';
import { UserStatisticsComponent } from './user-statistics.component';


@NgModule({
  declarations: [UserStatisticsComponent],
  imports: [
    CommonModule,
    UserStatisticsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports:[UserStatisticsComponent]
})
export class UserStatisticsModule { }
