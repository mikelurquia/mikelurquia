import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
    /*children: [
      { path: '', redirectTo: 'layout' },
      { path: 'layout',          component: LayoutComponent },
      { path: 'robotdetail/:id', component: RobotDetailComponent }
    ]*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }