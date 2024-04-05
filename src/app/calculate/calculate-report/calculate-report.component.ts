import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculate-report',
  standalone: true,
  imports: [SharedModule, FormsModule,CommonModule],
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
      .api(`calculate/getCalculateDetail/${this.id}`, 'get')
      .subscribe(
        (res: any) => {
          console.log(res);
          this.detail = res;
          if (this.detail.ruc_calculate && this.detail.property_calculate) {
            this.titleService.setTitle(
              this.detail.ruc_calculate + ' - ' + this.detail.property_calculate
            );
          } else {
            this.titleService.setTitle(
              'Cotización N°: ' + this.detail.calculate.number
            );
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
