import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculate-detail',
  templateUrl: './calculate-detail.component.html',
  styleUrl: './calculate-detail.component.css',
})
export class CalculateDetailComponent {
  id = null;
  loading = false;
  detail: any = null;
  modal: string = 'product';
  visible: boolean = false;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getData();
    });
  }

  getData() {
    this.loading = true;
    this.service
      .api(`calculate/getCalculateDetail/${this.id}`, 'get')
      .subscribe(
        (res: any) => {
          console.log(res);
          this.detail = res;
          this.loading = false;
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
        }
      );
  }

  showModal(modal: string): void {
    this.modal = modal;
    this.visible = true;
  }

  ok(): void {
    this.modal = '';
    this.visible = false;
  }

  cancel(): void {
    this.modal = '';
    this.visible = false;
  }

  deleteProduct(item: any) {
    console.log(item);
    this.loading = true;
    this.service
      .api(`calculate/deleteProductCalculate/${item.id}`, 'delete')
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Producto Eliminado');
          this.getData();
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
          this.service.toast('error', 'Eliminación fallida');
        }
      );
  }

  deleteService(item: any) {
    console.log(item);
    this.loading = true;
    this.service
      .api(`calculate/deleteServiceCalculate/${item.id}`, 'delete')
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Servicio Eliminado');
          this.getData();
        },
        (err: any) => {
          console.log(err);
          this.loading = false;
          this.service.toast('error', 'Eliminación fallida');
        }
      );
  }
}
