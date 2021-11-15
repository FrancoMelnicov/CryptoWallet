import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { HomeComponent } from "./home/home.component";
import { ListWalletsComponent } from "./list-wallets/list-wallets.component";
import { PagesComponent } from "./pages.component";
import { SellComponent } from "./sell/sell.component";
import { WalletComponent } from "./wallet/wallet.component";
import { BuyComponent } from "./buy/buy.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'list-wallets', component: ListWalletsComponent},
            {path: 'home', component: HomeComponent},
            {
                path: 'wallet', 
                component: WalletComponent,
                children: [
                    {path: 'buy', component: BuyComponent},
                    {path: 'sell', component: SellComponent}
                ]
            },
        ]
    }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule]
})

export class PagesRoutingModule {}