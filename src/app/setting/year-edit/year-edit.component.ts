import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-year-edit',
  templateUrl: './year-edit.component.html',
  styleUrl: './year-edit.component.css',
})
export class YearEditComponent {
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
    this.service.api(`mec/getYear/${this.id}`, 'post').subscribe((res: any) => {
      this.item = res.data;
    });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.service.api(`mec/updateYear/${this.id}`, 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Año Actualizado');
        this.service.goPage('setting/year/edit/' + res.data.id);
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
    this.service.api(`mec/deleteYear/${this.id}`, 'delete').subscribe(
      (res: any) => {
        this.service.toast('success', 'Año Eliminado');
        this.service.goPage('setting/year/index');
      },
      (err: any) => {
        console.log(err);
        this.service.toast('error', 'No se puede Eliminar');
      }
    );
  }
}
