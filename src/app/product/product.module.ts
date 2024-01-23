import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
  ]
})
export class ProductModule { }
