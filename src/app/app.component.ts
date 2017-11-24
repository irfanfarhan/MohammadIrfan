import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { URLSearchParams } from '@angular/http';
import { ToasterContainerComponent, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userId: string;
  userName: string;
  constructor( @Inject(DOCUMENT) private document: any,
    private router: Router) { }

  title = 'app';

  ngOnInit() { }
}
