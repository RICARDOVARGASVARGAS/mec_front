import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.css',
})
export class ServiceCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service.api('mec/registerService', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Servicio Registrado');
        this.service.goPage('service/edit/' + res.data.id);
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
