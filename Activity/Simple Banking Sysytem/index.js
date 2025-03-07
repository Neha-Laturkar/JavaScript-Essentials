import { bankAccount } from "./bankAccount.js";

const acc1 = new bankAccount("001", "Neha", 5000 );

acc1.deposit(4000);
acc1.withdraw(2000);
acc1.checkBalance();
acc1.accountDetails();