<script lang="ts">
    import { claim, release } from "$lib/controller/device_controller";

    export let device_name;
    export let claimed;
</script>


{#if (!claimed)}
<button on:click={() => claim(device_name)}>Claim!</button>
{:else}
<button on:click={() => release(device_name)}>Release!</button>
{/if}