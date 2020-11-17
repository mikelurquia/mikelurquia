import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
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
export class ContactRoutingModule { }