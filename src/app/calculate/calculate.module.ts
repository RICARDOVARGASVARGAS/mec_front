import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateRoutingModule } from './calculate-routing.module';
import { CalculateIndexComponent } from './calculate-index/calculate-index.component';
import { CalculateCreateComponent } from './calculate-create/calculate-create.component';
import { CalculateEditComponent } from './calculate-edit/calculate-edit.component';
import { CalculateProductComponent } from './calculate-product/calculate-product.component';
import { CalculateDetailComponent } from './calculate-detail/calculate-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    CalculateIndexComponent,
    CalculateCreateComponent,
    CalculateEditComponent,
    CalculateProductComponent,
    CalculateDetailComponent,
  ],
  imports: [
    CommonModule,
    CalculateRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSelectModule,
    NzModalModule,
  ],
})
export class CalculateModule {}
