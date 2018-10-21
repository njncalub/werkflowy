import { Injectable } from '@angular/core';
import { State, ItemsStore } from './items.store';
import { Item } from './item.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { map } from 'rxjs/operators';

/** Responsible for querying the data from the Store. */
@Injectable({
  providedIn: 'root'
})
export class ItemsQuery extends QueryEntity<State, Item> {
  constructor(protected store: ItemsStore) {
    super(store);
  }

  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleItems$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleItems
  );

  selectAllDone$ = this.selectCount(item => item.completed).pipe(
    map(count => {
      return this.getCount() > 0 && count === this.getCount();
    })
  );

  private getVisibleItems(filter, items): Item[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return items.filter(t => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return items.filter(t => !t.completed);
      default:
        return items;
    }
  }
}
