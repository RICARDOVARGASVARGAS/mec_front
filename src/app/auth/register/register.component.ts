import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  loading: boolean = false;
  item: any = {};
  res: any = null;
  visible = false;
  constructor(private service: ApiService) {}

  register() {
    this.loading = true;
    this.res = null;
    this.service.api('company/registerCompany', 'post', this.item).subscribe(
      (res: any) => {
        this.visible = true;
        this.res = res;
        this.service.toast('success', 'REGISTRO EXITOSO');
        this.item = {};
        this.loading = false;
      },
      (err: any) => {
        this.res = err.error.errors;
        this.service.toast('error', 'ERROR EN EL REGISTRO');
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
