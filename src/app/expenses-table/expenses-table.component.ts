import { Component } from '@angular/core';
import { ExpensesTableEmptyData } from './expenses-table.consts';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent {
  public displayedColumns: string[] = ['date', 'amount'];
  public expanses = [ExpensesTableEmptyData];

  constructor() {}

  addNewEmptyRow() {
    const emptyRow = Object.assign({}, ExpensesTableEmptyData);
    this.expanses = [...this.expanses, emptyRow];
  }
}
