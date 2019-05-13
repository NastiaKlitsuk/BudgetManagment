import { expensesReducer } from './expenses/expenses.reducer';
import { sidebarReducer } from './sidebar/sidebar.reducer';

export const appReducers = {
  expensesByCategories: expensesReducer,
  sidebar: sidebarReducer
};
