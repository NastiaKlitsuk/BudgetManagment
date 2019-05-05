import { Component } from '@angular/core';
import { ExpensesTableEmptyData } from './expenses-table.consts';
import { Expenses } from './expenses-table.interfaces';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent {
  public displayedColumns: string[] = ['date', 'amount'];
  public expenses: Expenses[];

  constructor() {
    const emptyRow = Object.assign({}, ExpensesTableEmptyData);
    this.expenses = [emptyRow];
  }

  addNewEmptyRow() {
    const emptyRow = Object.assign({}, ExpensesTableEmptyData);
    this.expenses = [...this.expenses, emptyRow];
  }

  submitExpenses() {}
}
