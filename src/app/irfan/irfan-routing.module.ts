import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const irfanRoutes: Routes = [
  {
    path: 'irfan',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'about',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'resume',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ResumeComponent
      }
    ]
  },
  {
    path: 'portfolio',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: PortfolioComponent
      }
    ]
  },
  {
    path: 'services',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ServicesComponent
      }
    ]
  },
  {
    path: 'contact',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ContactComponent
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
