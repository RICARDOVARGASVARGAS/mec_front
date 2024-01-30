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
  loading = false;
  data: any = [];

  constructor(public service: ApiService) {
    this.getData();
  }

  getData($event: any = [5, '']) {
    this.per_page = $event[0];
    this.search = $event[1];
    this.list();
  }

  list() {
    this.loading = true;
    this.service
      .api(
        `sale/getSales?included=client,car.client,car.brand,car.color,car.year,car.example`,
        'post',
        {
          company_id: this.service.user.company_id,
          search: this.search,
          perPage: this.per_page,
        }
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loading = false;
          this.data = res.data;
          res.meta ? (this.meta = res.meta) : (this.meta = null);
        },
        (err: any) => {
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
