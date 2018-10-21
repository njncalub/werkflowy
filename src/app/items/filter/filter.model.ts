/** Enumerates the list of available filter actions. */
export enum VISIBILITY_FILTER {
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL'
}

/** Defines the filters that can be set. */
export interface ItemFilter {
  label: string;
  value: VISIBILITY_FILTER;
}

/** Handles the initial filters used by the app. */
export const initialFilters: ItemFilter[] = [
  { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
  { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
  { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];
