<script>
    import { put_api_devices_name_claim } from '$lib/diplomat/decentrafly';

    export let device_name;
    export let device_owner;
</script>


{#if (device_owner == null)}
<button on:click={() => put_api_devices_name_claim(device_name)}>Claim!</button>
{/if}