import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxRoutingModule } from './box-routing.module';
import { BoxIndexComponent } from './box-index/box-index.component';
import { BoxCreateComponent } from './box-create/box-create.component';
import { BoxEditComponent } from './box-edit/box-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { BoxShowComponent } from './box-show/box-show.component';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BoxMovementComponent } from './box-movement/box-movement.component';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    BoxIndexComponent,
    BoxCreateComponent,
    BoxEditComponent,
    BoxShowComponent,
    BoxMovementComponent,
  ],
  imports: [
    CommonModule,
    BoxRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSegmentedModule,
    NzModalModule,
    NzSelectModule,
  ],
})
export class BoxModule {}
