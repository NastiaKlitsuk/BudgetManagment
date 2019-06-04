import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { ExpensesState } from '../store/expenses/expenses.reducer';
import * as expensesActions from '../store/expenses/expenses.actions';

@Injectable()
export class ExpensesResolver implements Resolve<any> {
  constructor(private store: Store<ExpensesState>) {}

  resolve() {
    this.store.dispatch(new expensesActions.LoadExpenses());
    return of(EMPTY);
  }
}

@Injectable()
export class PrototypeExpensesResolver implements Resolve<any> {
  constructor(private store: Store<ExpensesState>) {}

  resolve() {
    this.store.dispatch(new expensesActions.LoadPrototypeExpenses());
    return of(EMPTY);
  }
}
