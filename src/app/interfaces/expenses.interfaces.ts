import { CategoryExpensesName } from '../enums/expenses.enums';

export interface Expense {
  date: string;
  amount: number;
}

export interface CategoryExpenses {
  categoryName: CategoryExpensesName;
  expenses: Expense[];
}
