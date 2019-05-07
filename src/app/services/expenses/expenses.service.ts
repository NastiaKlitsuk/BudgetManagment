import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryExpenses } from 'src/app/interfaces/expenses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  public expenses$: Observable<CategoryExpenses[]>;

  constructor(private http: HttpClient) {
    this.expenses$ = http.get('http://localhost:3004/expensesByCategory') as Observable<
      CategoryExpenses[]
    >;
  }
}
