import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-show',
  templateUrl: './box-show.component.html',
  styleUrl: './box-show.component.css',
})
export class BoxShowComponent {
  id = null;
  loading = false;
  item: any = {};
  errors: any = null;
  movements: any = [];
  totalMovements: number = 0;
  payments: any = [];
  totalPayments: number = 0;
  modal = 'Movimientos';
  total: number = 0;
  visible = false;

  constructor(public service: ApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getData();
    });
  }

  getData() {
    this.loading = true;
    this.service
      .api(`mec/getDetailBox/${this.id}`, 'get')
      .subscribe((res: any) => {
        this.item = res.box;
        this.movements = res.movements;
        this.totalMovements = res.totalMovements;
        this.payments = res.payments;
        this.totalPayments = res.totalPayments;
        this.total = res.total;
        this.loading = false;
      });
  }

  options = ['Movimientos', 'Caja', 'Pagos'];

  change(e: number): void {
    this.modal = this.options[e];
  }

  deleteMovement(item: any) {
    this.service
      .api(`mec/removeMovement/${item.id}`, 'delete')
      .subscribe((res: any) => {
        this.getData();
        this.service.toast('success', 'Movimiento Eliminado');
      });
  }

  showModal() {
    this.visible = true;
  }

  ok() {
    this.visible = false;
  }

  cancel() {
    this.visible = false;
  }
}
