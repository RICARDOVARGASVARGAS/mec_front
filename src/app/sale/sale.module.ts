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

@NgModule({
  declarations: [SaleIndexComponent, SaleCreateComponent, SaleEditComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSelectModule,
  ],
})
export class SaleModule {}
