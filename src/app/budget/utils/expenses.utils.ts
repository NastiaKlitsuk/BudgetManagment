import { Expense, CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';

export const ExpensesTableEmptyData: Expense = {
  date: '',
  amount: null,
  description: ''
};

export function emptyExpense() {
  return Object.assign({}, ExpensesTableEmptyData);
}

export function getCategoryExpensesByCategoryName(
  categoryName: CategoryExpensesName,
  expenses: CategoryExpenses[]
) {
  const categoryExpensesToChangeIndex = expenses.findIndex(
    expense => expense.categoryName === categoryName
  );
  return expenses[categoryExpensesToChangeIndex];
}

export function replaceCategoryExpenses(
  expenses: CategoryExpenses[],
  newCategoryExpenses: CategoryExpenses
) {
  const categoryExpensesToChangeIndex = expenses.findIndex(
    expense => expense.categoryName === newCategoryExpenses.categoryName
  );
  if (categoryExpensesToChangeIndex === -1) {
    throw Error('Can not replace categoryExpenses. Does not exist.');
  }

  return [
    ...expenses.slice(0, categoryExpensesToChangeIndex),
    newCategoryExpenses,
    ...expenses.slice(categoryExpensesToChangeIndex + 1)
  ];
}
