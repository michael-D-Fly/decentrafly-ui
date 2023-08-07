import { get } from 'svelte/store';


export async function decentrafly(token: string, uri: string, rqmap: object | undefined = undefined): Promise<object> {
    let rq = {...rqmap, ...{headers: {"Authorization": "Bearer " + token}}};

    return fetch("https://decentrafly.org" + uri, rq)
        .then(response => response.json())
}

export async function get_api_user_self(token: string): Promise<object> {
    return await decentrafly(token, "/api/user/self", {})
}