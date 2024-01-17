import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.item.status = 'active';
    this.service.api('user/registerUser', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Administrador Registrado');
        this.service.goPage('user/edit/' + res.data.id);
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
