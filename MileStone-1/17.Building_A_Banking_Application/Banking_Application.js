let result = document.getElementById("result");
class Bank {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) this.balance += amount;
    else console.log("Please Enter Valid Amount");
  }
  withdraw(amount) {
    if (amount > 0 && this.balance > amount) this.balance -= amount;
    else console.log("You can not withdraw money");
  }
  details() {
    console.log("Name ", this.name, "  Balanace", this.balance);
    return { Name: this.name, Balance: this.balance };
  }
}

let user_name = prompt("Enter Name");
let balance = parseInt(prompt("Enter Balance"));
if (!isNaN(balance)) {
  let user1 = new Bank(user_name, balance);

  let deposit_amount = parseInt(prompt("Enter Amount For Deposite"));
  let withdraw_amount = parseInt(prompt("Enter Amount For Withdraw"));

  if (!isNaN(deposit_amount) && !isNaN(withdraw_amount)) {
    user1.deposit(deposit_amount);
    user1.withdraw(withdraw_amount);

    //PRINT USER'S ACCOUNT DETAILS
    let details = user1.details();
    result.innerHTML = `Name: <span style='color:green'>${details.Name}</span>
    </br>Balance: <span style='color:green'>${details.Balance}</span>`;
  } else {
    alert("ENTER AMOUNT IN NUMBER(NOT IN TEXT)");
    result.textContent = "ENTER AMOUNT IN NUMBER(NOT IN TEXT)";
    result.style.color = "red";
  }
} else {
  alert("Enter Balance In Number (Not in Text)");
  result.textContent = "Enter Balance In Number (Not in Text)";
  result.style.color = "red";
}
