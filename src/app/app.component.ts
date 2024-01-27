import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ApiService } from './services/api.service';
import { SharedModule } from './shared/shared.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mec_front';

  user = null;
  report = false;

  constructor(private service: ApiService, private location: Location) {
    this.user = this.service.user;
    if (this.location.path().includes('report-sale')) {
      this.report = true;
    }
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
