import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import ApexCharts from 'apexcharts';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-report-profit',
  templateUrl: './report-profit.component.html',
  styleUrl: './report-profit.component.css',
})
export class ReportProfitComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  loading = false;
  data: any = {};
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {
    this.chartOptions = {
      series: [],
      chart: {
        width: 400,
        type: 'pie',
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.item.start_date = new Date().toISOString().slice(0, 10);
    this.item.end_date = new Date().toISOString().slice(0, 10);
    this.getData();
  }
  getData() {
    this.loading = true;
    this.service
      .api(`sale/getProfit`, 'post', {
        company_id: this.service.user.company_id,
        start_date: this.item.start_date,
        end_date: this.item.end_date,
      })
      .subscribe((res: any) => {
        this.loading = false;
        this.data = res;

        // console.log(Object.keys(this.data.chart));
        // console.log(Object.values(this.data.chart));
        this.chartOptions.labels = Object.keys(this.data.chart).map((clave) =>
          clave.toUpperCase()
        );
        this.chartOptions.series = Object.values(this.data.chart);

        this.service.toast('success', 'Reporte Cargado');
      });
  }
}
