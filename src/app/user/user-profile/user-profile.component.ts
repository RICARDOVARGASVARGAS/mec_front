import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  loading = false;
  item: any = {};
  errors: any = null;
  change: any = {};

  constructor(public service: ApiService) {
    this.getData();
  }
  getData() {
    this.service
      .api(`user/getUser/${this.service.user.id}`, 'get')
      .subscribe((res: any) => {
        this.item = res.data;
        console.log(res);
        // Actualizar LocalStorage
        const user: any = JSON.parse(localStorage.getItem('user') ?? '');
        user.names = this.item.names;
        user.surnames = this.item.surnames;
        user.email = this.item.email;
        user.image = this.item.image;
        user.storage = this.item.storage;
        localStorage.setItem('user', JSON.stringify(user));
      });
  }
  save() {
    this.loading = true;
    this.errors = null;
    this.service
      .api(`user/updateUser/${this.service.user.id}`, 'put', this.item)
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.getData();
          this.service.toast('success', 'Datos Actualizados');
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
          this.errors = err.error.errors;
          this.service.toast('error', 'Registro fallido');
        }
      );
  }

  changePassword() {
    this.loading = true;
    if (this.change.password === this.change.confirm) {
      if (this.change.password.length < 6) {
        this.service.toast(
          'error',
          'La contraseña debe ser mayor a 6 caracteres'
        );
        this.loading = false;
      } else {
        this.service
          .api(
            `user/changePassword/${this.service.user.id}`,
            'post',
            this.change
          )
          .subscribe(
            (res: any) => {
              this.loading = false;
              this.service.toast('success', 'Datos Actualizados');
            },
            (err: any) => {
              this.loading = false;
              this.service.toast('error', 'Registro fallido');
            }
          );
      }
    } else {
      this.loading = false;
      this.service.toast('error', 'Las contraseñas no coinciden');
    }
  }
}
