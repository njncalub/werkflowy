import { ID, guid } from '@datorama/akita';

/** Describes an individual node in the list of Items. */
export interface Item {
  id: ID;
  title: string;
  subtitle: string;
  completed: boolean;
  archived: boolean;
  showChildren: boolean;
}

/**
 * Creates a new Item with the title provided. The Item ID is generated
 * automatically.
 */
export function createItem({ title }: Partial<Item>) {
  return {
    id: guid(),
    title,
    subtitle: '',
    completed: false,
    archived: false,
    showChildren: true
  } as Item;
}
