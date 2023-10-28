// import the writeable and derived functions in order to create stores
import { writable,  derived } from 'svelte/store';

// create a writeable store called csrs that holds an array of customer service rep objects
export const csrs = writable([  
  {id: 1, name: 'Jim Jenson', processed: 42},
  {id: 2, name: 'John Johnson', processed: 12},
  {id: 3, name: 'Jane Jenson', processed: 32},
  {id: 4, name: 'Jill Johnson', processed: 22},
  {id: 5, name: 'Jack Jenson', processed: 52},
  {id: 6, name: 'Jenny Johnson', processed: 62}
])

// create a derived store called topProducers that sorts the csrs store by the processed property and returns the top 3
// the derived store will update whenever the csrs store updates
// the derived function takes in two arguments: the store to derive from and a function that returns the derived value
export const topProducers = derived(csrs,  ($csrs) => { 
  // custom sorting function that sorts the csrs by the processed property
  return $csrs.sort((a, b) => {
    if (a.processed > b.processed) return -1;
    if (a.processed < b.processed) return 1;
    return 0;
    // slice the top 3
  }).slice(0,3)
})