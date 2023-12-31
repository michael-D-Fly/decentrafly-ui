import type { Device } from '$lib/model/device'
import { check_required } from '$lib/logic/util'

export function device_wire_to_internal(wire): Device {
    check_required(wire, ["claimed", "id"])
    return {
        name: wire.id,
        claimed: wire.claimed,
        type: wire.type,
        ...wire.user && {user: wire.user},
        ...wire.messages_sent && {messages_sent: wire.messages_sent},
    }
}

export function device_wires_to_internal(wires): Device[] {
    return wires.map(wire => device_wire_to_internal(wire))
}