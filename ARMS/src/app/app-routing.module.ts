import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmsdashboardComponent } from './Pages/armsdashboard/armsdashboard.component';

const routes: Routes = [
 {
    path:'armsdashboard',
    component:ArmsdashboardComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
