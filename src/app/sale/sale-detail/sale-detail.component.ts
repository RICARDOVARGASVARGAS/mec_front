import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrl: './sale-detail.component.css',
})
export class SaleDetailComponent {
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
    this.service.api(`sale/getSaleDetail/${this.id}`, 'get').subscribe(
      (res: any) => {
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
    this.loading = true;
    this.service.api(`sale/removeProduct`, 'post', item.pivot).subscribe(
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
    this.loading = true;
    this.service.api(`sale/removeService`, 'post', item.pivot).subscribe(
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

  deletePayment(item: any) {
    this.loading = true;
    this.service
      .api(`sale/removePayment`, 'post', {
        payment_id: item.id,
      })
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Pago Eliminado');
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
