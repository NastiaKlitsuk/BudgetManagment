import { Action } from '@ngrx/store';

export const OPEN_SIDEBAR = '[Sidebar] Open sidebar';
export const CLOSE_SIDEBAR = '[Sidebar] Close sidebar';

export class OpenSidebar implements Action {
  readonly type = OPEN_SIDEBAR;
}

export class CloseSidebar implements Action {
  readonly type = CLOSE_SIDEBAR;
}

export type SidebarActions = OpenSidebar | CloseSidebar;
