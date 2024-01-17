import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css',
})
export class CompanyEditComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {
    this.getItem();
  }

  getItem() {
    this.loading = true;
    this.service
      .api(`company/getCompany/${this.service.user.company_id}`, 'get')
      .subscribe((res: any) => {
        this.item = res.data;
        localStorage.setItem('company', JSON.stringify(this.item));
        const user = JSON.parse(localStorage.getItem('user') ?? '');
        user.company = this.item;
        localStorage.setItem('user', JSON.stringify(user));
        this.loading = false;
      });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.service
      .api(
        `company/updateCompany/${this.service.user.company_id}`,
        'put',
        this.item
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Mecánica Actualizada.');
        },
        (err: any) => {
          this.loading = false;
          this.errors = err.error.errors;
          this.service.toast('error', 'Registro fallido');
        }
      );
  }
}
