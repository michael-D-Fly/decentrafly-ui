<script lang="ts">
    import { claim, release } from "$lib/controller/device_controller";
    import { Button } from '@svelteuidev/core';
  
    export let device_name;
    export let claimed;
</script>

{#if (!claimed)}
    <Button variant='light' color='blue' on:click={() => claim(device_name)}>
        Claim this device
    </Button>
{:else}
    <Button variant='light' color='red' on:click={() => release(device_name)}>
        Remove
    </Button>
{/if}