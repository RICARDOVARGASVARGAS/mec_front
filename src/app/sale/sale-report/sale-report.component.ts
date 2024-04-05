import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sale-report',
  standalone: true,
  imports: [SharedModule, CommonModule],
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

  handleExport() {
    const invoiceContentElement = document.getElementById(
      'invoice_container'
    ) as HTMLElement;
    html2canvas(invoiceContentElement, {}).then((canvas) => {
      // is convert the canvas into base64 string url
      const imgData = canvas.toDataURL('image/png');
      // page width
      const pageWidth = 210;
      const pageHeight = 297;
      // calcuate the image actual height to fit with canvas and pdf
      const height = (canvas.height * pageWidth) / canvas.width;
      // initialize the PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      // add the image into pdf
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, height);

      pdf.save(
        this.detail.sale.car.client.name +
          ' ' +
          this.detail.sale.car.client.surname +
          ' ' +
          this.detail.sale.car.client.last_name +
          ' - ' +
          this.detail.sale.id + '.pdf'
      );
    });
  }
}
