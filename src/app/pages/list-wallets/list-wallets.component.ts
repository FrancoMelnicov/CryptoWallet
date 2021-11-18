import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-list-wallets',
  templateUrl: './list-wallets.component.html',
  styleUrls: ['./list-wallets.component.css']
})
export class ListWalletsComponent implements OnInit {

  public listWallet: Array<Wallet> = [];

  constructor() { }

  ngOnInit(): void {
  }

  verificateWallet(){

  }

  createWallet(){
    location.reload();
  }
}
