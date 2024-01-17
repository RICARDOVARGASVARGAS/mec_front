import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  id = null;
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getData();
    });
  }
  getData() {
    this.service.api(`user/getUser/${this.id}`, 'get').subscribe((res: any) => {
      this.item = res.data;
      console.log(this.item);
    });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.service.api(`user/updateUser/${this.id}`, 'put', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Administrador Actualizado');
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

  delete() {
    this.service.api(`user/deleteUser/${this.id}`, 'delete').subscribe(
      (res: any) => {
        this.service.toast('success', 'Administrador Eliminado');
        this.service.goPage('user');
      },
      (err: any) => {
        console.log(err);
        this.service.toast('error', 'No se puede Eliminar');
      }
    );
  }
}
