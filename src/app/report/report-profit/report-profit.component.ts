import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-report-profit',
  templateUrl: './report-profit.component.html',
  styleUrl: './report-profit.component.css',
})
export class ReportProfitComponent {
  loading = false;
  data: any = {};
  start_date = '';
  end_date = '';

  constructor(public service: ApiService) {
    this.start_date = new Date().toISOString().slice(0, 10);
    this.end_date = new Date().toISOString().slice(0, 10);
    this.getData();
  }
  getData() {
    this.service
      .api(`sale/getProfit`, 'post', {
        company_id: this.service.user.company_id,
        start_date: this.start_date,
        end_date: this.end_date,
      })
      .subscribe((res: any) => {
        this.data = res;
        console.log(res);
      });
  }
}
