import * as expensesActions from './expenses.actions';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';
import { emptyExpenses } from '../../consts/expenses.consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ExpensesState {
  expenses: CategoryExpenses[];
}

export const initialState: ExpensesState = {
  expenses: emptyExpenses
};

export function expensesReducer(
  state = initialState,
  action: expensesActions.ExpensesActions
) {
  switch (action.type) {
    case expensesActions.ADD_NEW_EXPENSE:
      const newExpense = action.payload;
      return {
        ...state,
        expenses: { ...expensesActions, newExpense }
      };
  }
  return state;
}

export const getExpenses = (state: ExpensesState) => state.expenses;

export const expensesState = createFeatureSelector<ExpensesState>('expensesByCategories');
export const getExpensesByCategories = createSelector(expensesState, getExpenses);
