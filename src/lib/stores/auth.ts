import { writable, get } from 'svelte/store';

export const token = writable<string | undefined>(undefined);