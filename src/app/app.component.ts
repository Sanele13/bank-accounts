import {Component, OnInit} from '@angular/core';
import {Account, AccountType} from "./models/account.model";
import {AccountService} from "./services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bank-accounts';
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
  }

  canWithdraw(account: Account) {
    return !(account.account_type === AccountType.Savings && account.balance < 0 || account.account_type === AccountType.Cheque && account.balance < -500);
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts: Account[]) => this.accounts = accounts);
  }

  getBalance(): number {
    return this.accounts.map(a => a.balance).reduce(((previousValue, currentValue) => +previousValue + +currentValue))
  }

  /**
  * This function only takes in an account to show that the value of the account and balance update.
  * */
  alert(account?: Account) {
    if (account) {
      this.accountService.withdrawFromAccount(account, 20); // withdrawing R20
    }
    alert('Success');
  }
}
