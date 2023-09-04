import { get } from 'svelte/store';
import { handle_authentication_failure } from '$lib/controller/auth_controller';


export async function decentrafly(uri: string, rqmap?: RequestInit, headers?: [string, string][]): Promise<object> {
    let rq = {
        credentials: 'include',
        ...rqmap,
        ...{headers: headers}
    };

    return fetch("https://api.decentrafly.org" + uri, rq)
        .then(response => {
            if (response.status == 401) {
                handle_authentication_failure(rq)
                return undefined
            } else if (response.status > 399) {
                console.log(response)
                return undefined
            } else {
                return response.json()
            }})
}

export async function get_api_user_self(token?: string): Promise<object> {
    let headers = token == undefined ? {} : {"Authorization": `Bearer ${token}`}
    return await decentrafly("/api/user/self", {}, headers)
}

export async function get_api_devices(): Promise<object> {
    return await decentrafly("/api/devices")
}

export async function put_api_devices_name_claim(device_name: string): Promise<object> {
    return await decentrafly(`/api/devices/${device_name}/claim`, {'method': 'PUT'})
}

export async function put_api_devices_name_release(device_name: string): Promise<object> {
    return await decentrafly(`/api/devices/${device_name}/release`, {'method': 'PUT'})
}