import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {
    this.service
      .api(`companies/${service.user.company_id}`, 'get')
      .subscribe((res: any) => {
        this.item = res.data;
      });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.service
      .api(`companies/${this.service.user.company_id}`, 'put', this.item)
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Empresa Actualizada.');
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
