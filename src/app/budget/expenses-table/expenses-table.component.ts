import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CategoryExpenses, Expense } from '../interfaces/expenses.interfaces';
import { CategoryExpensesName } from '../enums/expenses.enums';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { actualAmountValidator } from '../validators/expenses.validators';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit {
  public displayedColumns: string[] = [
    'subCategoryColumn',
    'commentsColumn',
    'plannedAmountColumn',
    'actualAmountColumn'
  ];
  public rows: FormArray;
  public expensesForm: FormGroup;
  public dataSource: BehaviorSubject<AbstractControl[]>;
  @Input() expenses: Expense[];
  @Output() addNewRow: EventEmitter<CategoryExpensesName> = new EventEmitter();
  @Output() submitExpenses: EventEmitter<CategoryExpenses> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.rows = this.formBuilder.array([]);
    this.dataSource = new BehaviorSubject<AbstractControl[]>([]);
    this.expensesForm = this.formBuilder.group({ expensesRows: this.rows });
  }

  ngOnInit(): void {
    this.expenses.forEach(expense => this.addRow(expense));
  }

  addRow({
    sub_category,
    date,
    comments,
    planned_amount,
    actual_amount
  }: Expense) {
    const row = new FormGroup({
      sub_category: new FormControl(sub_category),
      date: new FormControl(date),
      comments: new FormControl(comments),
      planned_amount: new FormControl(planned_amount),
      actual_amount: new FormControl(actual_amount, [actualAmountValidator()])
    });

    this.rows.push(row);
    this.dataSource.next(this.rows.controls);
  }

  get actualAmount() {
    return this.expensesForm && this.expensesForm.get('actual_amount');
  }

  onBlur(expense: Expense) {
  }

  onAddNewRow() {
    // this.addNewRow.emit(this.categoryExpenses.get('categoryName'));
  }

  submit() {
    // this.submitExpenses.emit(this.categoryExpenses);
  }
}
