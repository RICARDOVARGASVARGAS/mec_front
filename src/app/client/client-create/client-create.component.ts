import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css',
})
export class ClientCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service.api('mec/registerClient', 'post', this.item).subscribe(
      (res: any) => {
        this.loading = false;
        this.service.toast('success', 'Cliente Registrado');
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

  // generateRandomDocument() {
  //   this.item.document = Math.floor(
  //     100000000000000 + Math.random() * 900000000000000
  //   );
  //   this.item.document = this.item.document.toString();
  // }

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
