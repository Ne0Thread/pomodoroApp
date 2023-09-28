import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { TableWorkPlaceComponent } from './pages/table-work-place/table-work-place.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LogInComponent,
    TableWorkPlaceComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

    SidebarComponent,
    LogInComponent,
    TableWorkPlaceComponent
  ]
})
export class SharedModule { }
