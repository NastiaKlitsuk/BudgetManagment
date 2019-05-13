import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  SidebarState,
  getSidebarOpenState
} from '../store/sidebar/sidebar.reducer';
import * as sidebarActions from '../store/sidebar/sidebar.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private isSidebarOpen: boolean;

  constructor(private store: Store<SidebarState>) {}

  ngOnInit(): void {
    this.store
      .select(getSidebarOpenState)
      .subscribe(isOpen => (this.isSidebarOpen = isOpen));
  }

  onSidebarButtonClick() {
    this.isSidebarOpen
      ? this.store.dispatch(new sidebarActions.CloseSidebar())
      : this.store.dispatch(new sidebarActions.OpenSidebar());
  }
}
