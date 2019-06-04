import { CategoryExpensesName } from '../enums/expenses.enums';

export interface Expense {
  sub_category: string;
  date: string;
  comments: string;
  planned_amount: number;
  actual_amount: string;
}

export interface CategoryExpenses {
  id: number;
  categoryName: CategoryExpensesName;
  expenses: Expense[];
}
