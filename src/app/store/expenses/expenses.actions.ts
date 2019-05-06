import { Action } from '@ngrx/store';
import { CategoryExpensesName } from '../../enums/expenses.enums';

export const ADD_NEW_EXPENSE = '[Expenses] Add new expense';
export const POST_EXPENSES = '[Expenses] Post expenses';

export class AddNewExpense implements Action {
  readonly type = ADD_NEW_EXPENSE;
  constructor(public payload: CategoryExpensesName) {}
}

export class PostExpenses implements Action {
  readonly type = POST_EXPENSES;
  constructor(public payload: CategoryExpensesName) {}
}

export type ExpensesActions = AddNewExpense | PostExpenses;
