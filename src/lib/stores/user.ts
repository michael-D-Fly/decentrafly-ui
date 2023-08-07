import { writable, readable } from 'svelte/store';
import { get_api_user_hello } from '$lib/diplomat/decentrafly';

export const store = readable<object|undefined>(undefined,
    function start(set) {
        get_api_user_hello()
        .then(u => set(u))
        
        return function stop() {};
    })