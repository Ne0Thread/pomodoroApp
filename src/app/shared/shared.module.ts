import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { TableWorkPlaceComponent } from './pages/table-work-place/table-work-place.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GrafTortaComponent } from './components/graf-torta/graf-torta.component';
import { NgChartsModule} from 'ng2-charts';
import { RadarGrafComponent } from './components/radar-graf/radar-graf.component';
import { LineGrafComponent } from './components/line-graf/line-graf.component';







@NgModule({
  declarations: [
    SidebarComponent,
    LogInComponent,
    TableWorkPlaceComponent,
    HomePageComponent,
    GrafTortaComponent,
    RadarGrafComponent,
    LineGrafComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  exports: [

    SidebarComponent,
    LogInComponent,
    TableWorkPlaceComponent,
    GrafTortaComponent,
    NgChartsModule
  ]
})
export class SharedModule { }
