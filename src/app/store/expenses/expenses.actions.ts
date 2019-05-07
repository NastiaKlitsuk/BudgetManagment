import { Action } from '@ngrx/store';
import { CategoryExpensesName } from '../../enums/expenses.enums';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';

export const LOAD_EXPENSES = '[Expenses] Load expenses';
export const ADD_NEW_EMPTY_EXPENSE = '[Expenses] Add new empty expense';
export const POST_EXPENSES = '[Expenses] Post expenses';
export const LOAD_EXPENSES_SUCCESS = '[Expenses] Load expenses success';

export class AddNewEmptyExpense implements Action {
  readonly type = ADD_NEW_EMPTY_EXPENSE;
  constructor(public payload: CategoryExpensesName) {}
}

export class PostExpenses implements Action {
  readonly type = POST_EXPENSES;
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

export type ExpensesActions = AddNewEmptyExpense | PostExpenses | LoadExpenses | LoadExpensesSuccess;
