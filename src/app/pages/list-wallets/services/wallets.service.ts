import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  public url_getListWallets: string = "";
  public url_getWallet: string = "";
  public url_createWallet: string = "";
  public url_updateWallet: string = "";
  public url_deleteWallet: string = "";

  //Todos los observables tendrían que hacer una request al back, quien se encargaría de verifcar que los datos sean correctos, que no estén repetidos y que creen los objetos

  constructor(private _htpp: HttpClient) {}

  getListWallets(): Observable<any>{
    //retornaría la lista de billeteras del back

    return new Observable( observer => {

      let listWallet = JSON.parse(localStorage.getItem('list-wallets')!);
      
      let response = {
        status: 'ok',
        listWallets: listWallet
      }

      observer.next(response)
    })
  }

  postWallet(nameWallet: string): Observable<any>{
    //si existe una billetera con ese nombre devuelve un mensaje que ya existe.
    let listWallets = JSON.parse(localStorage.getItem('list-wallets')!);

    for(let wallet of listWallets){

      console.log(wallet.name == nameWallet)
      if(wallet.name == nameWallet){
        return new Observable( observer => {

          let response = {
            satus: 'ok',
            created: false,
            message: "This name was used"
          }

          observer.next(JSON.stringify(response));
        })
      }
    }

    //si esa billetera no existe el back devolverá un objeto de wallet
    return new Observable( observer => { 

      let wallet = new Wallet((listWallets.length + 1).toString(), nameWallet, [], 0);
      listWallets.push(wallet);

      localStorage.setItem('list-wallets', JSON.stringify(listWallets));

      let response = {
        status: 'ok',
        created: true,
        message: "Wallet created succesfully"
      }

      observer.next(response);
    })
  }
}
