<script>
    import Claimbutton from './components/claimbutton.svelte';
    import { store as devices } from '$lib/stores/devices'
    import { load } from '$lib/controller/device_controller'

    

    load()
    devices.subscribe(d => console.log(d))
</script>


<h2>Devices</h2>

<div>Your devices</div>
<ul>
    {#each $devices.filter(d => d.claimed) as device}
        <li>
            <span>{device.name}</span>
            {#if device.user}
            <span><b>nick</b>: {device.user}</span>
            {/if}
            <span><Claimbutton claimed={device.claimed} device_name={device.name} /></span>
        </li>
    {/each}
</ul>

<div>Online at your IP</div>
<ul>
    {#each $devices.filter(d => !d.claimed) as device}
        <li>
            <span>{device.name}</span>
            {#if device.user}
            <span><b>nick</b>: {device.user}</span>
            {/if}
            <span><Claimbutton claimed={device.claimed} device_name={device.name} /></span>
        </li>
    {/each}
</ul>