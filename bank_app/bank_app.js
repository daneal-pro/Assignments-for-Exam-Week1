class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Invalid withdrawal amount. Please enter a positive value.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $$  ${this.balance}`);
    }
  }
  
  const account1 = new BankAccount(1001, "John Doe");
  const account2 = new BankAccount(1002, "Jane Smith", 500);
  

  account1.deposit(200);
  account1.withdraw(100);
  account2.deposit(150);
  account2.withdraw(700);
  
  account1.displayAccountInfo();
  account2.displayAccountInfo();
  