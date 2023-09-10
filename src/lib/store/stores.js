import { writable } from 'svelte/store'

export const cart = writable([])
export const count = writable(1)