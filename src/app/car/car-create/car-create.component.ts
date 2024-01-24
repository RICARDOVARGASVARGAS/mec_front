import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css',
})
export class CarCreateComponent implements OnInit {
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

    const brands = this.service.api('mec/getBrands', 'post', {
      company_id: this.service.user.company_id,
      per_page: 'all',
    });

    const examples = this.service.api('mec/getExamples', 'post', {
      company_id: this.service.user.company_id,
      per_page: 'all',
    });

    const colors = this.service.api('mec/getColors', 'post', {
      company_id: this.service.user.company_id,
      per_page: 'all',
    });

    const years = this.service.api('mec/getYears', 'post', {
      company_id: this.service.user.company_id,
      per_page: 'all',
    });

    const result = concat(clients, brands, examples, colors, years);

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
        this.data.brands = data[1];
        this.data.examples = data[2];
        this.data.colors = data[3];
        this.data.years = data[4];
        this.loading = false;
      }
    );
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service.api('mec/registerCar', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Vehículo Registrado');
        this.service.goPage('car/edit/' + res.data.id);
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
