import { derived } from 'svelte/store';
import { token } from '$lib/stores/auth';
import { get_api_user_self } from '$lib/diplomat/decentrafly';

export const store = derived(token, ($token, set) => {
    if ($token != undefined) {
        get_api_user_self($token).then(user => set(user))
    } else {
        set(undefined)
    }
})