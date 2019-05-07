import { Injectable } from '@angular/core';
import { ExpensesService } from '../../services/expenses/expenses.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as expensesActions from '../../store/expenses/expenses.actions';

@Injectable()
export class ExpensesEffects {
  constructor(
    private actions$: Actions,
    private expensesService: ExpensesService
  ) {}

  @Effect()
  loadExpenses$ = this.actions$.pipe(
    ofType(expensesActions.LOAD_EXPENSES),
    switchMap(() => {
      return this.expensesService.expenses$.pipe(
        map(expenses => new expensesActions.LoadExpensesSuccess(expenses))
      );
    })
  );
}
