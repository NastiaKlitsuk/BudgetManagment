import { Expense } from '../interfaces/expenses.interfaces';
import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';

export const ExpensesTableEmptyData: Expense = {
  date: '',
  amount: null
};

export const emptyExpenses: CategoryExpenses[] = [
  {
    categoryName: CategoryExpensesName.Education,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  },
  {
    categoryName: CategoryExpensesName.Food,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  },
  {
    categoryName: CategoryExpensesName.Housing,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  },
  {
    categoryName: CategoryExpensesName.Other,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  },
  {
    categoryName: CategoryExpensesName.Shopping,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  },
  {
    categoryName: CategoryExpensesName.Traveling,
    expenses: [Object.assign({}, ExpensesTableEmptyData)]
  }
];
