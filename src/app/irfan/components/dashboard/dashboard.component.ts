import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
  }
  aboutMe() {}
}
