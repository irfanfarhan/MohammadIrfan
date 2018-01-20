import { Component, OnInit } from '@angular/core';
import { PortfolioWebSitesMetadata, PortfolioAngular5ComponentsMetadata } from './../../model/portfolio-metadata.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioWebSitesMetadata: any;
  portfolioAngular5ComponentsMetadata: any;
  constructor() { }

  ngOnInit() {
    this.portfolioWebSitesMetadata = PortfolioWebSitesMetadata;
    this.portfolioAngular5ComponentsMetadata = PortfolioAngular5ComponentsMetadata;
  }

}
