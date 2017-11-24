import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const irfanRoutes: Routes = [
  {
    path: 'irfan',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'first-page',
        component: FirstPageComponent
      },
      {
        path: 'second-page',
        component: SecondPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(irfanRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IrfanRoutingModule { }
