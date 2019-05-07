import * as expensesActions from './expenses.actions';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';
import { emptyExpenses } from '../../consts/expenses.consts';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  emptyExpense,
  getCategoryExpensesByCategoryName,
  replaceCategoryExpenses
} from '../../utils/expenses.utils';

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
    case expensesActions.ADD_NEW_EMPTY_EXPENSE:
      const categoryExpensesName = action.payload;
      const categoryExpensesToChange = getCategoryExpensesByCategoryName(
        categoryExpensesName,
        state.expenses
      );
      const newCategoryExpenses = {
        ...categoryExpensesToChange,
        expenses: [...categoryExpensesToChange.expenses, emptyExpense()]
      };
      return {
        ...state,
        expenses: replaceCategoryExpenses(state.expenses, newCategoryExpenses)
      };
    case expensesActions.LOAD_EXPENSES_SUCCESS:
      const expenses = action.payload;
      return {
        ...state,
        expenses
      };
  }
  return state;
}

export const getExpenses = (state: ExpensesState) => state.expenses;

export const expensesState = createFeatureSelector<ExpensesState>(
  'expensesByCategories'
);
export const getExpensesByCategories = createSelector(
  expensesState,
  getExpenses
);
