import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { IrfanRoutingModule } from './irfan-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonService } from './services/common.service';

@NgModule({
  imports: [CommonModule, SharedModule, LibraryModule, IrfanRoutingModule],
  declarations: [
    NavigationComponent,
    DashboardComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent
  ],
  entryComponents: [],
  providers: [LoadingService, CommonService]
})
export class IrfanModule {}
