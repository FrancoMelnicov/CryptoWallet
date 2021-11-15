import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components shared
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
