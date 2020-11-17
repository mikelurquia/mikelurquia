import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { errorRoute        } from '@layouts/error/error.route';
import { footerRoute       } from '@layouts/footer/footer.route';
import { navbarRoute       } from '@layouts/navbar/navbar.route';
import { NotFoundComponent } from '@layouts/not-found/not-found.component';

const LAYOUT_ROUTES = [navbarRoute, footerRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'home',      loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
        { path: 'contact',   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
        { path: '',  redirectTo: '/home', pathMatch: 'full' },
        { path: '**', component: NotFoundComponent, data: { routeName: "Hello2" } },
        ...LAYOUT_ROUTES
      ],
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
