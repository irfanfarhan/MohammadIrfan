import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  ToasterModule,
  ToasterService
} from 'angular2-toaster/angular2-toaster';
import { TooltipModule } from 'ngx-tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    TooltipModule,
    NgxChartsModule
  ],
  declarations: [LoginRedirectComponent],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    TooltipModule,
    LoginRedirectComponent,
    NgxChartsModule
  ],
  providers: [ToasterService]
})
export class SharedModule {}
