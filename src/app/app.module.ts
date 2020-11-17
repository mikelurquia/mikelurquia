import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from '@layouts/navbar/navbar.component';
import { ErrorComponent } from '@layouts/error/error.component';
import { FooterComponent } from '@layouts/footer/footer.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

@NgModule({
  declarations: [
    MainComponent, NavbarComponent, FooterComponent, ErrorComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
