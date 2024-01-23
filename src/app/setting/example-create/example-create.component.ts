import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-example-create',
  templateUrl: './example-create.component.html',
  styleUrl: './example-create.component.css',
})
export class ExampleCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.item.status = 'active';
    this.service.api('mec/registerExample', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Modelo Registrado');
        this.service.goPage('setting/example/edit/' + res.data.id);
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
