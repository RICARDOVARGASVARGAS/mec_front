import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEditComponent } from './company-edit/company-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit',
    pathMatch: 'full',
  },
  {
    path: 'edit',
    component: CompanyEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
