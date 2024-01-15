import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { API_URL } from '../../config/Link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  backend = API_URL;
  user: any = [];

  constructor(private service: ApiService) {
    this.user = this.service.user;
  }

  goPage(url: string) {
    this.service.goPage(url);
  }

  logout() {
    this.service.logout();
  }
}
