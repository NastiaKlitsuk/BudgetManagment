import { Action } from '@ngrx/store';
import { CategoryExpensesName } from '../../enums/expenses.enums';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';

export const LOAD_EXPENSES = '[Expenses] Load expenses';
export const CLEAR_EXPENSES = '[Expenses] Clear expenses';
export const ADD_NEW_EMPTY_EXPENSE = '[Expenses] Add new empty expense';
export const SAVE_CATEGORY_EXPENSES = '[Expenses] Save category expenses';
export const SAVE_EXPENSES_SUCCESS = '[Expenses] Save expenses success';
export const LOAD_EXPENSES_SUCCESS = '[Expenses] Load expenses success';

export class ClearExpenses implements Action {
  readonly type = CLEAR_EXPENSES;
  constructor() {}
}
export class AddNewEmptyExpense implements Action {
  readonly type = ADD_NEW_EMPTY_EXPENSE;
  constructor(public payload: CategoryExpensesName) {}
}

export class SaveCategotyExpenses implements Action {
  readonly type = SAVE_CATEGORY_EXPENSES;
  constructor(public payload: CategoryExpenses) {}
}

export class SaveExpensesSuccess implements Action {
  readonly type = SAVE_EXPENSES_SUCCESS;
  constructor(public payload: CategoryExpenses) {}
}

export class LoadExpenses implements Action {
  readonly type = LOAD_EXPENSES;
  constructor() {}
}

export class LoadExpensesSuccess implements Action {
  readonly type = LOAD_EXPENSES_SUCCESS;
  constructor(public payload: CategoryExpenses[]) {}
}

export type ExpensesActions =
  | ClearExpenses
  | AddNewEmptyExpense
  | SaveCategotyExpenses
  | LoadExpenses
  | LoadExpensesSuccess
  | SaveExpensesSuccess;
