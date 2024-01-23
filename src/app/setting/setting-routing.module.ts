import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearIndexComponent } from './year-index/year-index.component';
import { checkGuard } from '../guards/check.guard';
import { YearCreateComponent } from './year-create/year-create.component';
import { YearEditComponent } from './year-edit/year-edit.component';
import { BrandIndexComponent } from './brand-index/brand-index.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ColorIndexComponent } from './color-index/color-index.component';
import { ColorCreateComponent } from './color-create/color-create.component';
import { ColorEditComponent } from './color-edit/color-edit.component';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExampleCreateComponent } from './example-create/example-create.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'brand/index',
    pathMatch: 'full',
  },
  //
  {
    path: 'brand/index',
    component: BrandIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['brand.index'],
    },
  },
  {
    path: 'brand/create',
    component: BrandCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['brand.create'],
    },
  },
  {
    path: 'brand/edit/:id',
    component: BrandEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['brand.edit'],
    },
  },
  //
  {
    path: 'color/index',
    component: ColorIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['color.index'],
    },
  },
  {
    path: 'color/create',
    component: ColorCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['color.create'],
    },
  },
  {
    path: 'color/edit/:id',
    component: ColorEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['color.edit'],
    },
  },
  //
  {
    path: 'example/index',
    component: ExampleIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['example.index'],
    },
  },
  {
    path: 'example/create',
    component: ExampleCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['example.create'],
    },
  },
  {
    path: 'example/edit/:id',
    component: ExampleEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['example.edit'],
    },
  },
  //
  {
    path: 'year/index',
    component: YearIndexComponent,
    canActivate: [checkGuard],
    data: {
      access: ['year.index'],
    },
  },
  {
    path: 'year/create',
    component: YearCreateComponent,
    canActivate: [checkGuard],
    data: {
      access: ['year.create'],
    },
  },
  {
    path: 'year/edit/:id',
    component: YearEditComponent,
    canActivate: [checkGuard],
    data: {
      access: ['year.edit'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
