// Update it as much as you want, just don't change the names
// export
 export class BankAccount {


  #balance: number = 0;

  constructor() {
     
  }
  public withdraw (quantity: number){

      if(quantity <= quantity)
      {
          this.#balance = this.#balance - quantity;
          return this.#balance;
      }        
      else
      return -1;
    }

    public deposit (quantity: number){
      if(quantity <= 1000000)
      {
          this.#balance = this.#balance + quantity;
          return this.#balance;
      }        
      else
      return -1;
    }

}





export class FedexAccount {
    constructor() {
      
    }
    public sendMail(recipient: string):void  {
      console.log('greet sendMail ' + recipient );
    }
    public recieveMail(sender: string): void {
      console.log('greet recieveMail probably random text ' + sender);

    }


}




export class KazPostAccount extends BankAccount {
  constructor() {
     super();
  }

  public sendMail(recipient: string):void  {
    console.log('greet sendMail ' + recipient );
  }
  public recieveMail(sender: string): void {
    console.log('greet recieveMail probably random text ' + sender);

  }
  
}

export function withdrawMoney(accounts: BankAccount[]  , amount: number) {
  for (const account of accounts) {
    account.withdraw(amount);
  }
}

export function sendLetterTo(accounts: (FedexAccount | KazPostAccount)[], recipient: string) {
  for (const account of accounts) {
    account.sendMail(recipient);
  }
}


