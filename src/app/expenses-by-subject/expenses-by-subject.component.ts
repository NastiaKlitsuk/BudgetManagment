import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  ExpensesState,
  getExpensesByCategories
} from '../store/expenses/expenses.reducer';
import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';
import * as expensesActions from '../store/expenses/expenses.actions';

@Component({
  selector: 'app-expenses-by-subject',
  templateUrl: './expenses-by-subject.component.html',
  styleUrls: ['./expenses-by-subject.component.css']
})
export class ExpensesBySubjectComponent implements OnInit {
  public expensesByCategory$: Observable<CategoryExpenses[]>;

  constructor(private store: Store<ExpensesState>) {}

  ngOnInit() {
    this.expensesByCategory$ = this.store.select(getExpensesByCategories);
  }

  onAddNewRow(categoryExpensesName: CategoryExpensesName) {
    this.store.dispatch(
      new expensesActions.AddNewExpense(categoryExpensesName)
    );
  }

  onSubmitExpenses(categoryExpensesName: CategoryExpensesName) {
    this.store.dispatch(new expensesActions.PostExpenses(categoryExpensesName));
  }
}
