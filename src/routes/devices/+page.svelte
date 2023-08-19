<script>
    import Claimbutton from './components/claimbutton.svelte';

    export let data;

    console.log(data)
</script>


<h2>Devices</h2>
<ul>
    {#each data.devices as device}
        <li>
            <div>{device.name}</div>
            <div><b>messages</b>: {device.messages_sent}</div>
            <div><b>nick</b>: {device.user}</div>
            <div><Claimbutton device_name={device.name} device_owner={device.owner} /></div>
        </li>
    {/each}
</ul>