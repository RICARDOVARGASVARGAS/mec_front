import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css',
})
export class ClientEditComponent {
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
    this.service
      .api(`mec/getClient/${this.id}`, 'post')
      .subscribe((res: any) => {
        this.item = res.data;
      });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.service
      .api(`mec/updateClient/${this.id}`, 'post', this.item)
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Cliente Actualizado');
          this.service.goPage('client/edit/' + res.data.id);
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
    this.service.api(`mec/deleteClient/${this.id}`, 'delete').subscribe(
      (res: any) => {
        this.service.toast('success', 'Cliente Eliminado');
        this.service.goPage('client/index');
      },
      (err: any) => {
        console.log(err);
        this.service.toast('error', 'No se puede Eliminar');
      }
    );
  }

  getDataClient() {
    this.loading = true;
    this.service.getDataPeople(this.item.document).subscribe(
      (res: any) => {
        if (res.information) {
          this.loading = false;
          this.item.name = res.information.names;
          this.item.surname = res.information.father_last_name;
          this.item.last_name = res.information.mother_last_name;
        } else {
          this.loading = false;
          this.service.toast('warning', 'No se encontraron resultados');
        }
      },
      (err: any) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
