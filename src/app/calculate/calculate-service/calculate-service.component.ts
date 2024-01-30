import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-calculate-service',
  templateUrl: './calculate-service.component.html',
  styleUrl: './calculate-service.component.css',
})
export class CalculateServiceComponent {
  @Input() service: any;
  @Output() event = new EventEmitter<any>();
  item: any = {};
  loading = false;
  services: any = [];
  errors: any = null;

  constructor(private servicio: ApiService) {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.servicio
      .api(`mec/getServices`, 'post', {
        company_id: this.servicio.user.company_id,
      })
      .subscribe(
        (res: any) => {
          console.log(res);
          this.services = res.data;
          this.loading = false;
        },
        (err: any) => {
          this.loading = false;
          this.service.toast('error', err.error.message);
        }
      );
  }

  select(service: any) {
    let data = this.services.find((item: any) => item.id === service);
    this.item.price_buy = data.price_buy;
    this.item.price_sell = data.price_sell;
  }

  save() {
    this.item.calculate_id = this.service.id;
    this.loading = true;
    this.errors = null;
    this.servicio.api('calculate/addService', 'post', this.item).subscribe(
      (res: any) => {
        this.event.emit(res.data);
        this.loading = false;
        this.servicio.toast('success', 'Servicio Agregado');
        this.clean();
      },
      (err: any) => {
        console.log(err);
        this.loading = false;
        this.errors = err.error.errors;
        this.servicio.toast('error', 'Registro fallido');
      }
    );
  }

  clean() {
    this.item = {};
    this.item.date_service = new Date().toISOString().slice(0, 10);
  }
}
