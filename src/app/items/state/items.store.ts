import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { VISIBILITY_FILTER } from '../filter/filter.model';

import { Item } from './item.model';

/** Defines the states available for the Item. */
export interface State extends EntityState<Item> {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

/** Defines the initial state value for the app. */
const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

/** Responsible for storing Item states. */
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'items' })
export class ItemsStore extends EntityStore<State, Item> {
  constructor() {
    super(initialState);
  }
}
