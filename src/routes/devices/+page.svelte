<script>
    import { Badge, Card, Group, Loader, Text, Stack } from '@svelteuidev/core';
    import Claimbutton from './components/claimbutton.svelte';
    import { store as devices } from '$lib/stores/devices'
    import { load } from '$lib/controller/device_controller'

    let loaded = load()
</script>

<h2>Your devices</h2>


{#await loaded}
<Loader variant='dots'/>
{:then _}
<Stack override={{ maxWidth: 700 }} >
    {#each $devices as device}
        <Card shadow='sm' padding='lg'>
            <Stack>
                <Group>
                    {#if device.type == "secure_adsb"}
                        <Text weight="bold">Secure ADSB Device</Text>
                    {/if}
                    {#if device.type == "mqtt"}
                        <Text weight="bold">MQTT Device</Text>
                    {/if}                    
                    {#if device.claimed}
                        <Badge>Claimed</Badge>
                    {/if}
                    <Badge>{device.name}</Badge>
                </Group>
                
                <Claimbutton device_name={device.name} claimed={device.claimed} />
            </Stack>
        </Card>
    {/each}
</Stack>
{/await}