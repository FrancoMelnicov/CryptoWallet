
export class Wallet{

    constructor(
        public id: string,
        public nameWallet: string,
        public listCyptos: Array<Crypto>
    ){}
}