import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-sale-edit',
  templateUrl: './sale-edit.component.html',
  styleUrl: './sale-edit.component.css',
})
export class SaleEditComponent {
  id = null;
  loading = false;
  item: any = {};
  data: any = [];
  errors: any = null;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getInfo();
      this.getData();
    });
  }

  ngOnInit(): void {
    // this.getData();
  }

  getInfo() {
    this.service
      .api(`sale/getSale/${this.id}`, 'post')
      .subscribe((res: any) => {
        this.item = res.data;
      });
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
    this.service.api(`sale/updateSale/${this.id}`, 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Venta Actualizada');
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

  delete() {
    this.service.api(`sale/deleteSale/${this.id}`, 'delete').subscribe(
      (res: any) => {
        this.service.toast('success', 'Venta Eliminada');
        this.service.goPage('sale/index');
      },
      (err: any) => {
        console.log(err);
        this.service.toast('error', 'No se puede Eliminar');
      }
    );
  }
}
