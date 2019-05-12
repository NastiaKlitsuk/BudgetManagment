import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';
import { emptyExpense } from '../utils/expenses.utils';

export const emptyExpenses: CategoryExpenses[] = [
  {
    id: 1,
    categoryName: CategoryExpensesName.Education,
    expenses: [emptyExpense()]
  },
  {
    id: 2,
    categoryName: CategoryExpensesName.Food,
    expenses: [emptyExpense()]
  },
  {
    id: 3,
    categoryName: CategoryExpensesName.Housing,
    expenses: [emptyExpense()]
  },
  {
    id: 4,
    categoryName: CategoryExpensesName.Other,
    expenses: [emptyExpense()]
  },
  {
    id: 5,
    categoryName: CategoryExpensesName.Shopping,
    expenses: [emptyExpense()]
  },
  {
    id: 6,
    categoryName: CategoryExpensesName.Traveling,
    expenses: [emptyExpense()]
  }
];
