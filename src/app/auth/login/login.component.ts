import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loading: boolean = false;
  email: string = '';
  password: string = '';
  errors: any = null;

  constructor(private service: ApiService) {}

  login() {
    this.loading = true;
    this.errors = null;
    this.service.login(this.email, this.password).subscribe(
      (res: any) => {
        console.log(res);
        if (res.user.status == 'active') {
          if (this.service.saveLocalStorage(res)) {
            this.service.toast('success', 'INICIANDO SESIÓN');
            location.reload();
          } else {
            this.service.toast('error', 'ERROR DE RED');
          }
        } else {
          this.service.toast('error', 'SU CUENTA HA SIDO SUSPENDIDA');
        }
      },
      (err: any) => {
        console.log(err);
        this.errors = err.error.error;
        this.service.toast('error', 'CREDENCIALES INCORRECTAS');
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
