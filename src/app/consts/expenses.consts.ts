import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';
import { emptyExpense } from '../utils/expenses.utils';

export const emptyExpenses: CategoryExpenses[] = [
  {
    categoryName: CategoryExpensesName.Education,
    expenses: [emptyExpense()]
  },
  {
    categoryName: CategoryExpensesName.Food,
    expenses: [emptyExpense()]
  },
  {
    categoryName: CategoryExpensesName.Housing,
    expenses: [emptyExpense()]
  },
  {
    categoryName: CategoryExpensesName.Other,
    expenses: [emptyExpense()]
  },
  {
    categoryName: CategoryExpensesName.Shopping,
    expenses: [emptyExpense()]
  },
  {
    categoryName: CategoryExpensesName.Traveling,
    expenses: [emptyExpense()]
  }
];
