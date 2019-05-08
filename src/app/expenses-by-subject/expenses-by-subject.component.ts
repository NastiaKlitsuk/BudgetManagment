import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  ExpensesState,
  getExpensesByCategories
} from '../store/expenses/expenses.reducer';
import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import * as expensesActions from '../store/expenses/expenses.actions';
import { CategoryExpensesName } from '../enums/expenses.enums';

@Component({
  selector: 'app-expenses-by-subject',
  templateUrl: './expenses-by-subject.component.html',
  styleUrls: ['./expenses-by-subject.component.css']
})
export class ExpensesBySubjectComponent implements OnInit {
  public expensesByCategory$: Observable<CategoryExpenses[]>;
  public expensesByCategory: CategoryExpenses[];

  constructor(private store: Store<ExpensesState>) {}

  ngOnInit() {
    this.expensesByCategory$ = this.store.select(getExpensesByCategories);
    this.store.dispatch(new expensesActions.LoadExpenses());
  }

  onAddNewRow(categoryExpensesName: CategoryExpensesName) {
    console.log('onAddNewRow', { categoryExpensesName });
    this.store.dispatch(
      new expensesActions.AddNewEmptyExpense(categoryExpensesName)
    );
  }

  onSubmitExpenses(categoryExpenses: CategoryExpenses) {
    console.log('onSubmitExpenses', { categoryExpenses });
    this.store.dispatch(new expensesActions.SaveCategotyExpenses(categoryExpenses));
  }
}
