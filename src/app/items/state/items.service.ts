import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { VISIBILITY_FILTER } from '../filter/filter.model';

import { ItemsStore } from './items.store';
import { createItem, Item } from './item.model';

/** Responsible for creating and modifying the Items. */
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private itemsStore: ItemsStore) {}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.itemsStore.updateRoot({
      ui: {
        filter
      }
    });
  }

  complete({ id, completed }: Item) {
    this.itemsStore.update(id, {
      completed
    });
  }

  add(title: string) {
    const item = createItem({ title });
    this.itemsStore.add(item);
  }

  delete(id: ID) {
    this.itemsStore.remove(id);
  }
}
