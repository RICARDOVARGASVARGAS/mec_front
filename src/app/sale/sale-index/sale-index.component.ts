import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sale-index',
  templateUrl: './sale-index.component.html',
  styleUrl: './sale-index.component.css',
})
export class SaleIndexComponent {
  per_page = null;
  search = '';
  status = '';
  loading = false;
  data: any = [];
  perPage: number = 5;

  statuses = [
    {
      value: '',
      name: 'Todos',
    },
    {
      value: 'pending',
      name: 'Pendiente',
    },
    {
      value: 'done',
      name: 'Pagado',
    },
    {
      value: 'debt',
      name: 'Deuda',
    },
    {
      value: 'cancelled',
      name: 'Cancelado',
    },
  ];

  constructor(public service: ApiService) {
    this.getData();
  }

  getData($event: any = [5, '', '']) {
    this.per_page = $event[0];
    this.search = $event[1];
    // this.status = $event[2];
    console.log($event);
    this.list();
  }

  list() {
    this.loading = true;
    console.log(this.status);
    this.service
      .api(
        `sale/getSales?included=client,car.client,car.brand,car.color,car.year,car.example`,
        'post',
        {
          company_id: this.service.user.company_id,
          search: this.search,
          perPage: this.per_page,
          page: this.actualPage,
          status: this.status,
        }
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.data = res.data;
          res.meta ? (this.meta = res.meta) : (this.meta = null);
        },
        (err: any) => {
          // console.log(err);
          this.loading = false;
          this.service.toast('error', err.error.message);
        }
      );
  }

  // Paginación
  meta: any = null;
  actualPage: number = 1;

  get page(): string {
    const page = this.meta == null ? '' : `page=${this.actualPage}`;
    return page;
  }

  changePage(page: number) {
    const nextPage = this.actualPage + page;
    if (1 <= nextPage && nextPage <= this.meta.last_page) {
      this.actualPage += page;
      this.list();
    } else {
      this.service.toast('warning', 'No hay más páginas');
    }
  }
}
