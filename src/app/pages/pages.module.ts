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
import { WalletComponent } from './wallet/wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ListWalletsComponent,
    WalletComponent,
    PagesComponent,
  ],
  exports: [
    HomeComponent,
    ListWalletsComponent,
    WalletComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
