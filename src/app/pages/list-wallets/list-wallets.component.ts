import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { WalletsService } from './services/wallets.service';

@Component({
  selector: 'app-list-wallets',
  templateUrl: './list-wallets.component.html',
  styleUrls: ['./list-wallets.component.css']
})
export class ListWalletsComponent implements OnInit {

  public listWallet: Array<Wallet> = [];
  public nameWallet: string = "";

  constructor(private _walletService: WalletsService) { }

  ngOnInit(): void {
    
    //simula la base de datos donde se alojan las billeteras
    if(!localStorage.getItem('list-wallets')){
      localStorage.setItem('list-wallets', JSON.stringify(this.listWallet));
    }

    this.getsListWallets();
  }

  getsListWallets(){

    this._walletService.getListWallets().subscribe(
      data => {
        
        this.listWallet = data.listWallets;
        console.log(this.listWallet);
      }
      //mostrar error en caso de que haya
      /*
      error =>{
        console.log(error)
      }
      */
    )
  }

  createWallet(){
    /*
    let wallet = new Wallet(this.listWallet.length.toString(), this.nameWallet, []);
    this.listWallet.push();
    location.reload();
    */
    this._walletService.postWallet(this.nameWallet).subscribe(
      data => {
        console.log(data);
        this.getsListWallets();
      }
      //mostrar error en caso de que haya
      /*
      error =>{
        console.log(error)
      }
      */
    )

  }
}
