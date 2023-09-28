import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LogInComponent } from './shared/pages/log-in/log-in.component';
import { TableWorkPlaceComponent } from './shared/pages/table-work-place/table-work-place.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'table',
    component: TableWorkPlaceComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
