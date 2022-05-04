export enum AccountType {
  Savings = 'savings',
  Cheque = 'cheque'
}

export interface Account {
  account_number: string;
  account_type: AccountType;
  balance: number
  id?: string; // we'd use this to update the value of the
}
