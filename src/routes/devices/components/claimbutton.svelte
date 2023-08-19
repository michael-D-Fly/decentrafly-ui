<script>
    export let device_name;
    export let device_owner;
</script>


{#if (device_owner != null)}
Claimed
{:else}
<button>Claim!</button>
{/if}