import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.css',
})
export class SaleCreateComponent {
  loading = false;
  item: any = {};
  data: any = [];
  errors: any = null;

  constructor(public service: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    const clients = this.service.api('mec/getClients', 'post', {
      company_id: this.service.user.company_id,
      per_page: 'all',
    });

    const cars = this.service.api(
      'mec/getCars?included=client,brand,color,year,example',
      'post',
      {
        company_id: this.service.user.company_id,
        per_page: 'all',
      }
    );

    const result = concat(clients, cars);

    const data: any = [];

    result.subscribe(
      (results: any) => {
        data.push(results.data);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.data.clients = data[0];
        this.data.cars = data[1];
        this.loading = false;
      }
    );
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service.api('sale/registerSale', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Venta Registrada');
        this.service.goPage('sale/edit/' + res.data.id);
      },
      (err: any) => {
        console.log(err);
        this.loading = false;
        this.errors = err.error.errors;
        this.service.toast('error', 'Registro fallido');
      }
    );
  }
}
