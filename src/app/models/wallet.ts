
export class Wallet{

    constructor(
        public id: string,
        public name: string,
        public listCyptos: Array<Crypto>,
        public total: number
    ){}
}