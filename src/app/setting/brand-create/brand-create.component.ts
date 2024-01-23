import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrl: './brand-create.component.css',
})
export class BrandCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service.api('mec/registerBrand', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Marca Registrada');
        this.service.goPage('setting/brand/edit/' + res.data.id);
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
