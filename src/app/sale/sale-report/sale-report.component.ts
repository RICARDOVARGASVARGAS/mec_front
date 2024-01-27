import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sale-report',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sale-report.component.html',
  styleUrl: './sale-report.component.css',
})
export class SaleReportComponent {
  id = null;
  loading = false;
  detail: any = null;

  constructor(
    public service: ApiService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getData();
    });
  }

  getData() {
    this.loading = true;
    this.service
      .api(
        `sale/getSaleDetail/${this.id}?included=car.client,car.brand,car.color,car.year,car.example`,
        'get'
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.detail = res;
          this.titleService.setTitle(
            this.detail.sale.car.client.name +
              ' ' +
              this.detail.sale.car.client.surname +
              ' ' +
              this.detail.sale.car.client.last_name +
              ' - ' +
              this.detail.sale.id
          );
          this.loading = false;
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
        }
      );
  }
}
