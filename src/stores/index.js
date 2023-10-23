import { writable, readable, derived } from 'svelte/store';

export const cart = writable([])
export const company = readable('SvelteInfo')

export const csrs = writable([  
  {id: 1, name: 'Jim Jenson', processed: 42},
  {id: 2, name: 'John Johnson', processed: 12},
  {id: 3, name: 'Jane Jenson', processed: 32},
  {id: 4, name: 'Jill Johnson', processed: 22},
  {id: 5, name: 'Jack Jenson', processed: 52},
  {id: 6, name: 'Jenny Johnson', processed: 62}
])

export const topProducers = derived(csrs,  ($csrs) => {
  return $csrs.sort((a, b) => {
    if (a.processed > b.processed) return -1;
    if (a.processed < b.processed) return 1;
    return 0;
  }).slice(0,3)
})