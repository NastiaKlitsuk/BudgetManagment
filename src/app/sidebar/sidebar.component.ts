import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  SidebarState,
  getSidebarOpenState
} from '../store/sidebar/sidebar.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isSidebarOpened$: Observable<boolean>;

  constructor(private store: Store<SidebarState>) {}

  ngOnInit() {
    this.isSidebarOpened$ = this.store.select(getSidebarOpenState);
  }
}
