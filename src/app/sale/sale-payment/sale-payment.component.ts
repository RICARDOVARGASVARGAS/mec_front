import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sale-payment',
  templateUrl: './sale-payment.component.html',
  styleUrl: './sale-payment.component.css',
})
export class SalePaymentComponent {
  @Input() sale: any;
  @Output() event = new EventEmitter<any>();
  item: any = {};
  loading = false;
  boxes: any = [];
  errors: any = null;

  constructor(private service: ApiService) {
    this.item.date_payment = new Date().toISOString().slice(0, 10);
    this.getList();
  }

  getList() {
    this.loading = true;
    this.service
      .api(`mec/getBoxes`, 'post', {
        company_id: this.service.user.company_id,
      })
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.boxes = res.data;
        },
        (err: any) => {
          this.loading = false;
          this.service.toast('error', err.error.message);
        }
      );
  }

  save() {
    this.item.sale_id = this.sale.id;
    this.loading = true;
    this.errors = null;
    this.service.api('sale/addPayment', 'post', this.item).subscribe(
      (res: any) => {
        this.event.emit(res.data);
        this.loading = false;
        this.service.toast('success', 'Pago Agregado');
        this.clean();
      },
      (err: any) => {
        console.log(err);
        this.loading = false;
        this.errors = err.error.errors;
        this.service.toast('error', 'Registro fallido');
      }
    );
  }

  clean() {
    this.item = {};
    this.item.date_payment = new Date().toISOString().slice(0, 10);
  }
}
