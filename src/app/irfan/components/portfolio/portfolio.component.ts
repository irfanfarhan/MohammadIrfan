import { Component, OnInit } from '@angular/core';
import { PortfolioMetadata } from './../../model/portfolio-metadata.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioMetadata: any;
  constructor() { }

  ngOnInit() {
    this.portfolioMetadata = PortfolioMetadata;
  }

}
