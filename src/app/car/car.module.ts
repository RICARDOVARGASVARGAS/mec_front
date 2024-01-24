import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarIndexComponent } from './car-index/car-index.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [CarIndexComponent, CarCreateComponent, CarEditComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSelectModule,
  ],
})
export class CarModule {}
