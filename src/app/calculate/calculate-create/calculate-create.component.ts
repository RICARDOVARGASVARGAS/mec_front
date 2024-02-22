import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-calculate-create',
  templateUrl: './calculate-create.component.html',
  styleUrl: './calculate-create.component.css',
})
export class CalculateCreateComponent {
  loading = false;
  item: any = {};
  errors: any = null;

  constructor(public service: ApiService) {}

  ngOnInit() {}

  save() {
    this.loading = true;
    this.errors = null;
    this.item.company_id = this.service.user.company_id;
    this.service
      .api('calculate/registerCalculate', 'post', this.item)
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.service.toast('success', 'Cotización Registrada');
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
}
