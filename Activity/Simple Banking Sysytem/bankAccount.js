export class bankAccount {

    constructor(accountNumber, AccountHolder, balance) {
        this.accountNumber = accountNumber;
        this.AccountHolder = AccountHolder;
        this.balance = balance;
    }

     deposit ( ammount){
        this.balance += ammount;
        console.log("You have deposited "+ ammount + " and your total balance is : " + this.balance);
    };

    withdraw (ammount){
        if (ammount >= this.balance){
            console.log("Insufficient Balance !!");
        }
        else{
            this.balance -= ammount;
        console.log("You have withdrawned " + ammount+ " from your account and balance is : " + this.balance);
        }
        
    };

    checkBalance(){
        console.log("You availbale balance is : " + this.balance);
    };

    accountDetails(){
        console.log("Your account details are : " + this.accountNumber, this.AccountHolder, this.balance);
    };
};




