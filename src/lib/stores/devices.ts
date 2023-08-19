import { writable } from 'svelte/store';
import type { Device } from '$lib/model/device';

function createStore() {
    const { set, update, subscribe } = writable<Device[]>([])

    function replace_device(replacement: Device) {
        update((dl) => {
            return dl.map(device => {
                if (device.name == replacement.name) {
                    return replacement
                } else {
                    return device
                }
            })
        })
    }

    return {
        subscribe,
        set,
        replace_device
    }
}

export const store = createStore()