import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8080/api/accounts');
  }

  /**
   * This function would make and API call to update the account.
   * It's not going to return anything for now.
   * **/
  withdrawFromAccount(account: Account, amount: number): void {
    account.balance -= amount
  }
}
