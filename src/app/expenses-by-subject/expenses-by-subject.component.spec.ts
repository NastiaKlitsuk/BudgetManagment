import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesBySubjectComponent } from './expenses-by-subject.component';

describe('ExpensesBySubjectComponent', () => {
  let component: ExpensesBySubjectComponent;
  let fixture: ComponentFixture<ExpensesBySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesBySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
