import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-by-subject',
  templateUrl: './expenses-by-subject.component.html',
  styleUrls: ['./expenses-by-subject.component.css']
})
export class ExpensesBySubjectComponent {
  public expensesCategoryNames = ['Housing', 'Food', 'Traveling', 'Education', 'Shopping', 'Other'];

  constructor() {}

}
