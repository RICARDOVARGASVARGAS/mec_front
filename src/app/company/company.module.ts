import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompanyEditComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule,
  ],
})
export class CompanyModule {}
