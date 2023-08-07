import { token } from '$lib/stores/auth';
import { get } from 'svelte/store';


export async function decentrafly(uri: string, rqmap: object | undefined = undefined): Promise<object> {
    let rq = {...rqmap, ...{headers: {"Authorization": "Bearer " + get(token)}}};

    return fetch("https://decentrafly.org" + uri, rq)
        .then(response => response.json())
}

export async function get_api_user_hello(): Promise<object> {
    return await decentrafly("/api/user/hello", {})
}