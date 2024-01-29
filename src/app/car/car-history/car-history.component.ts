import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrl: './car-history.component.css',
})
export class CarHistoryComponent {
  id = null;
  loading = false;
  item: any = {};
  history: any = [];

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getInfo();
      this.getData();
    });
  }

  getInfo() {
    this.service.api(`mec/getCar/${this.id}`, 'post').subscribe((res: any) => {
      this.item = res.data;
    });
  }

  getData() {
    this.loading = true;
    this.service.api(`mec/getCarHistory/${this.id}`, 'get').subscribe(
      (res: any) => {
        this.history = res.data;
        this.loading = false;
        console.log(this.history);
      },
      (err: any) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
