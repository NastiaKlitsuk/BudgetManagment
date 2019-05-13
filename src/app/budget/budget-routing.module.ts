import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ExpensesResolver,
  EmptyExpensesResover
} from './resolvers/expenses.resolver';
import { ExpensesBySubjectComponent } from './expenses-by-subject/expenses-by-subject.component';

const routes: Routes = [
  {
    path: 'newMonth',
    component: ExpensesBySubjectComponent,
    resolve: { emptyExpensesResolver: EmptyExpensesResover }
  },
  {
    path: 'updateMonth',
    component: ExpensesBySubjectComponent,
    resolve: { expensesResolver: ExpensesResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
