import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-box-movement',
  templateUrl: './box-movement.component.html',
  styleUrl: './box-movement.component.css',
})
export class BoxMovementComponent {
  @Input() box: any;
  @Output() event = new EventEmitter<any>();
  item: any = {};
  loading = false;
  errors: any = null;
  clients: any = null;

  constructor(private service: ApiService) {
    this.item.date_movement = new Date().toISOString().slice(0, 10);
    this.getList();
  }

  getList() {
    this.loading = true;
    this.service
      .api(`mec/getClients`, 'post', {
        company_id: this.service.user.company_id,
      })
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.clients = res.data;
        },
        (err: any) => {
          this.loading = false;
          this.service.toast('error', err.error.message);
        }
      );
  }

  save() {
    this.item.box_id = this.box.id;
    this.loading = true;
    this.errors = null;
    this.service.api('mec/addMovement', 'post', this.item).subscribe(
      (res: any) => {
        this.event.emit(res.data);
        this.loading = false;
        this.service.toast('success', 'Movimiento Agregado');
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
    this.item.date_movement = new Date().toISOString().slice(0, 10);
  }
}
