class BankAccount {


    #balance: number = 0;

    constructor() {
       
    }
      withdraw (quantity: number){

        if(quantity <= quantity)
        {
            this.#balance = this.#balance - quantity;
            return this.#balance;
        }        
        else
        return -1;
      }

      deposit (quantity: number){
        if(quantity <= 1000000)
        {
            this.#balance = this.#balance + quantity;
            return this.#balance;
        }        
        else
        return -1;
      }

}

export default BankAccount;


