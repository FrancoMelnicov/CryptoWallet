import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const gecko_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  public url_listCoins: string = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

  constructor(private _http: HttpClient){}

  getFirstFiveCoins(): Observable<any>{
    return this._http.get(gecko_url + this.url_listCoins);
  }
}
