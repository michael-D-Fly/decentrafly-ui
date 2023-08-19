import { get_api_devices, get_api_devices_sendingfromcallerip } from "$lib/diplomat/decentrafly"

export async function load({ params }) {    
    return get_api_devices_sendingfromcallerip()
  }