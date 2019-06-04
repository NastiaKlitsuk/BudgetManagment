import { Expense, CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export const ExpensesTableEmptyData: Expense = {
  sub_category: '',
  date: '',
  comments: '',
  planned_amount: null,
  actual_amount: null
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

export function updateCategoryExpenses(
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

export function expenseAsFormGroup(expense: Expense) {
  return new FormGroup({
    sub_category: new FormControl(expense.sub_category),
    comments: new FormControl(expense.comments),
    planned_amount: new FormControl(expense.planned_amount),
    actual_amount: new FormControl(expense.actual_amount)
  });
}
