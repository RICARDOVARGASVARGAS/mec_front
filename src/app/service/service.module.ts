import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceIndexComponent } from './service-index/service-index.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    ServiceIndexComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
  ],
})
export class ServiceModule {}
