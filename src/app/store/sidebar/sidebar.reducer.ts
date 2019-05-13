import * as sidebarActions from './sidebar.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface SidebarState {
  isOpened: boolean;
}

export const initialState: SidebarState = {
  isOpened: true
};

export function sidebarReducer(
  state = initialState,
  action: sidebarActions.SidebarActions
) {
  switch (action.type) {
    case sidebarActions.OPEN_SIDEBAR:
      return {
        ...state,
        isOpened: true
      };
    case sidebarActions.CLOSE_SIDEBAR:
      return {
        ...state,
        isOpened: false
      };
  }
  return state;
}

export const getIsOpened = (state: SidebarState) => state.isOpened;

export const sidebarState = createFeatureSelector<SidebarState>('sidebar');
export const getSidebarOpenState = createSelector(
  sidebarState,
  getIsOpened
);
