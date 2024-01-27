import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SaleProductComponent } from './sale-product/sale-product.component';
import { SaleServiceComponent } from './sale-service/sale-service.component';
import { SalePaymentComponent } from './sale-payment/sale-payment.component';

@NgModule({
  declarations: [
    SaleIndexComponent,
    SaleCreateComponent,
    SaleEditComponent,
    SaleDetailComponent,
    SaleProductComponent,
    SaleServiceComponent,
    SalePaymentComponent,
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSelectModule,
    NzModalModule,
  ],
})
export class SaleModule {}