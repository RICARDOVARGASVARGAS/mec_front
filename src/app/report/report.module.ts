import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportProfitComponent } from './report-profit/report-profit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ReportProfitComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
    NzSelectModule,
    NgApexchartsModule
  ],
})
export class ReportModule {}
