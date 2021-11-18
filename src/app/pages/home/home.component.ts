import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from '../services/coingecko.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listCryptos: Array<any> = [];

  constructor(private _coinGecko: CoingeckoService) { }

  ngOnInit(): void {
    this._coinGecko.getFirstFiveCoins().subscribe(
      data => {
        this.listCryptos = data;
      }
    )
  }

}
