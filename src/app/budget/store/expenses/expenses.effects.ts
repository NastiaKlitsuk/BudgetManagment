import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ExpensesService } from '../../services/expenses/expenses.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as expensesActions from './expenses.actions';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';

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
      return this.expensesService
        .getExpenses()
        .pipe(
          map(expenses => new expensesActions.LoadExpensesSuccess(expenses))
        );
    })
  );

  @Effect()
  saveExpenses$ = this.actions$.pipe(
    ofType(expensesActions.SAVE_CATEGORY_EXPENSES),
    switchMap((action: expensesActions.SaveCategotyExpenses) => {
      return this.expensesService.putCategoryExpenses(action.payload).pipe(
        map((categoryExpenses: CategoryExpenses) => new expensesActions.SaveExpensesSuccess(categoryExpenses)),
        catchError(error => {
          console.log(error);
          return of(error);
        })
      );
    })
  );
}
