import { goto } from '$app/navigation';
import { get_api_user_self } from '$lib/diplomat/decentrafly';
import { store as user_store } from '$lib/stores/user';

export function handle_authentication_failure(attempted_rq: object) {
    goto("/")
}

export async function refresh(token?: string) {
    get_api_user_self(token)
    .then(refreshed_user => {
        if (refreshed_user == undefined) {
            user_store.update_to_unauthenticated()
        } else {
            user_store.update_to_authenticated(refreshed_user)
        }
    })
}