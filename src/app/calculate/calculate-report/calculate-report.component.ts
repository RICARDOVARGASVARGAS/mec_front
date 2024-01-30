import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-calculate-report',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './calculate-report.component.html',
  styleUrl: './calculate-report.component.css',
})
export class CalculateReportComponent {
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
        `calculate/getCalculateDetail/${this.id}?included=car.client,car.brand,car.color,car.year,car.example`,
        'get'
      )
      .subscribe(
        (res: any) => {
          this.detail = res;
          if (this.detail.calculate.car) {
            this.titleService.setTitle(
              this.detail.calculate.car.client.name +
                ' ' +
                this.detail.calculate.car.client.surname +
                ' ' +
                this.detail.calculate.car.client.last_name +
                ' - ' +
                this.detail.calculate.id
            );
          } else {
            this.titleService.setTitle('Cotización: ' + this.detail.calculate.number);
          }

          this.loading = false;
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
        }
      );
  }
}
