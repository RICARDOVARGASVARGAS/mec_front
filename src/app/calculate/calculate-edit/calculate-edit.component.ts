import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-calculate-edit',
  templateUrl: './calculate-edit.component.html',
  styleUrl: './calculate-edit.component.css',
})
export class CalculateEditComponent {
  id = null;
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getInfo();
    });
  }

  getInfo() {
    this.service
      .api(`calculate/getCalculate/${this.id}`, 'post')
      .subscribe((res: any) => {
        this.item = res.data;
      });
  }

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service
      .api(`calculate/updateCalculate/${this.id}`, 'post', this.item)
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Cotización Actualizada');
          this.service.goPage('calculate/edit/' + res.data.id);
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
    this.service
      .api(`calculate/deleteCalculate/${this.id}`, 'delete')
      .subscribe(
        (res: any) => {
          this.service.toast('success', 'Cotización Eliminada');
          this.service.goPage('calculate/index');
        },
        (err: any) => {
          console.log(err);
          this.service.toast('error', 'No se puede Eliminar');
        }
      );
  }
}
