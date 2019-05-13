import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesBySubjectComponent } from './expenses-by-subject/expenses-by-subject.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesBySubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
