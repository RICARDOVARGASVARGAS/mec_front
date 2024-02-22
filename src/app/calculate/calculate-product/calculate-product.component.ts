import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-calculate-product',
  templateUrl: './calculate-product.component.html',
  styleUrl: './calculate-product.component.css',
})
export class CalculateProductComponent {
  @Input() product: any;
  @Output() event = new EventEmitter<any>();
  item: any = {};
  loading = false;
  products: any = [];
  errors: any = null;

  constructor(private service: ApiService) {}

  save() {
    this.item.calculate_id = this.product.id;
    this.loading = true;
    this.errors = null;
    this.service
      .api('calculate/registerItemCalculate', 'post', this.item)
      .subscribe(
        (res: any) => {
          this.event.emit(res.data);
          this.loading = false;
          this.service.toast('success', 'Producto Agregado');
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
    this.item.quantity = 1;
    this.item.date_sale = new Date().toISOString().slice(0, 10);
  }
}
