import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryExpenses } from '../../interfaces/expenses.interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const expensesByCategoryUrl = (id?: number) =>
  id
    ? `http://localhost:3004/expensesByCategory/${id}`
    : 'http://localhost:3004/expensesByCategory';

const prototypeExpensesByCategoryUrl = (id?: number) =>
  id
    ? `http://localhost:3004/prototypeExpensesByCategory/${id}`
    : 'http://localhost:3004/prototypeExpensesByCategory';
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private http: HttpClient) {}

  getPrototypeExpenses() {
    return this.http.get(prototypeExpensesByCategoryUrl()) as Observable<
      CategoryExpenses[]
    >;
  }

  getExpenses() {
    return this.http.get(expensesByCategoryUrl()) as Observable<
      CategoryExpenses[]
    >;
  }

  postCategoryExpenses(categoryExpenses: CategoryExpenses) {
    return this.http.post(
      expensesByCategoryUrl(),
      JSON.stringify(categoryExpenses),
      httpOptions
    );
  }

  putCategoryExpenses(categoryExpenses: CategoryExpenses) {
    return this.http.put(
      expensesByCategoryUrl(categoryExpenses.id),
      JSON.stringify(categoryExpenses),
      httpOptions
    );
  }
}
