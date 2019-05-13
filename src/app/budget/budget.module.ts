import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BudgetRoutingModule } from './budget-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesEffects } from './store/expenses/expenses.effects';
import { expensesReducer } from './store/expenses/expenses.reducer';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { ExpensesBySubjectComponent } from './expenses-by-subject/expenses-by-subject.component';
import { ExpensesService } from './services/expenses/expenses.service';
import { ExpensesResolver, EmptyExpensesResover } from './resolvers/expenses.resolver';

@NgModule({
  declarations: [ExpensesTableComponent, ExpensesBySubjectComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('expenses', expensesReducer),
    EffectsModule.forFeature([ExpensesEffects]),
    HttpClientModule
  ],
  providers: [ExpensesService, ExpensesResolver, EmptyExpensesResover]
})
export class BudgetModule {}
