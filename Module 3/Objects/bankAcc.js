var backAccount = {
    accountNumber : "232245781",
    holderName : "Neha Sutar ",
    balance : 5000,
    type : "Saving",
    deposit : function(amount){
        console.log ("Dear "+this.holderName+ "You have £"+this.balance + " In Your Account");
        this.balance += amount;
        console.log ("You are adding £"+ amount + " To Your Account");
       
        console.log("Total Balance now is £" +this.balance);

    },

    withdraw : function(amount){
        this.balance -= amount;
        console.log("You are withdrawing £" + amount + " From your account");
        console.log("Your remaining balance is £ :"+ this.balance);

    },
    accountDetails : function(){
        console.log(backAccount);
    }
};

backAccount.deposit(5000);
backAccount.withdraw(500);
backAccount.accountDetails();