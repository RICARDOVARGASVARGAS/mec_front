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
    console.log(this.email);
    this.loading = true;
    this.errors = null;
    this.service.login(this.email, this.password).subscribe(
      (res: any) => {
        console.log(res);
        if (res.user.status == 'active') {
          if (this.service.saveLocalStorage(res)) {
            location.reload();
          } else {
            this.service.toast('error', 'ERROR DE RED');
          }
        } else {
          this.service.toast('error', 'SU CUENTA HA SIDO SUSPENDIDA');
        }
      },
      (err: any) => {
        this.errors = err.error.error;
        console.log(this.errors);
        this.service.toast('error', 'CREDENCIALES INCORRECTAS');
        console.log(err);
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
