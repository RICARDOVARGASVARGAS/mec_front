import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file/file.component';
import { BodyComponent } from './body/body.component';
import { LoadComponent } from './load/load.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SysComponent } from './sys/sys.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    FileComponent,
    BodyComponent,
    LoadComponent,
    NavbarComponent,
    SearchComponent,
    SidebarComponent,
    SysComponent,
    TitleComponent,
  ],
  imports: [CommonModule],
  exports: [
    TitleComponent,
    NavbarComponent,
    SysComponent,
    LoadComponent,
    SearchComponent,
    FileComponent,
  ],
})
export class SharedModule {}
