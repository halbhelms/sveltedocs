import { writable } from 'svelte/store'
import { readable } from 'svelte/store'

export const cart = writable([])
export const user = readable('Rich Harris')
