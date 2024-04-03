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

  constructor(private api: ApiService) {}

  save() {
    this.item.calculate_id = this.service.id;
    this.loading = true;
    this.errors = null;
    this.api
      .api('calculate/registerServiceCalculate', 'post', this.item)
      .subscribe(
        (res: any) => {
          this.event.emit(res.data);
          this.loading = false;
          this.api.toast('success', 'Servicio Agregado');
          this.clean();
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
          this.errors = err.error.errors;
          this.api.toast('error', 'Registro fallido');
        }
      );
  }

  clean() {
    this.item = {};
  }
}
