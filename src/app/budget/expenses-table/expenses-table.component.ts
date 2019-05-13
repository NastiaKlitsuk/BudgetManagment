import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryExpenses } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent {
  public displayedColumns: string[] = ['date', 'description', 'amount'];
  @Input() categoryExpenses: CategoryExpenses;
  @Output() addNewRow: EventEmitter<CategoryExpensesName> = new EventEmitter();
  @Output() submitExpenses: EventEmitter<
  CategoryExpenses
  > = new EventEmitter();

  constructor() {
  }

  onAddNewRow() {
    this.addNewRow.emit(this.categoryExpenses.categoryName);
  }

  submit() {
    this.submitExpenses.emit(this.categoryExpenses);
  }
}
