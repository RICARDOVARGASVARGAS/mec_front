import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkGuard } from '../guards/check.guard';
import { ReportProfitComponent } from './report-profit/report-profit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profit',
    pathMatch: 'full',
  },
  {
    path: 'profit',
    component: ReportProfitComponent,
    canActivate: [checkGuard],
    data: {
      access: ['report.profit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
