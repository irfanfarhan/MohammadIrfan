import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { IrfanRoutingModule } from './irfan-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LibraryModule,
        IrfanRoutingModule
    ],
    declarations: [
    NavigationComponent,
    FirstPageComponent,
    SecondPageComponent,
    DashboardComponent],
    entryComponents: [],
    providers: []
})
export class IrfanModule { }
