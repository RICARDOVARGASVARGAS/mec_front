import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { YearEditComponent } from './year-edit/year-edit.component';
import { YearCreateComponent } from './year-create/year-create.component';
import { YearIndexComponent } from './year-index/year-index.component';
import { ColorIndexComponent } from './color-index/color-index.component';
import { BrandIndexComponent } from './brand-index/brand-index.component';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExampleCreateComponent } from './example-create/example-create.component';
import { ColorCreateComponent } from './color-create/color-create.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ColorEditComponent } from './color-edit/color-edit.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ImageModule } from 'primeng/image';
import { DirectivesModule } from '../directives/directives.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    YearEditComponent,
    YearCreateComponent,
    YearIndexComponent,
    ColorIndexComponent,
    BrandIndexComponent,
    ExampleIndexComponent,
    ExampleCreateComponent,
    ColorCreateComponent,
    BrandCreateComponent,
    BrandEditComponent,
    ColorEditComponent,
    ExampleEditComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule,
    FormsModule,
    NzPopconfirmModule,
    ImageModule,
    DirectivesModule,
  ],
})
export class SettingModule {}
