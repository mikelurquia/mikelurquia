import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent }
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
export class PortfolioRoutingModule { }