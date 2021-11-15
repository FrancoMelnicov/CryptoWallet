import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//router
import { AppRoutingModule } from '../app-routing.module';

//modules
import { SharedModule } from '../shared/shared.module';

//components pages
import { HomeComponent } from './home/home.component';
import { ListWalletsComponent } from './list-wallets/list-wallets.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListWalletsComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    ListWalletsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
