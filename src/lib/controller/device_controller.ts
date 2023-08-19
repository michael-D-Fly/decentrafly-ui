import { Device } from "$lib/model/device";
import { store as devices } from "$lib/stores/devices";
import {
    get_api_devices,
    put_api_devices_name_claim,
    put_api_devices_name_release
} from "$lib/diplomat/decentrafly";
import { device_wires_to_internal, device_wire_to_internal } from "$lib/adapters/device_adapter";

export function load() {
    get_api_devices()
    .then(response => {
        devices.set(device_wires_to_internal(response.devices))
    })
}

export function claim(device: string) {
    put_api_devices_name_claim(device)
    .then(response => {
        let device = device_wire_to_internal(response)
        devices.replace_device(device)
    })
}

export function release(device: string) {
    put_api_devices_name_release(device)
    .then(response => {
        let device = device_wire_to_internal(response)
        devices.replace_device(device)
    })
}