<script>
    import { Badge, Card, Group, Notification, Text, Stack } from '@svelteuidev/core';
    import Claimbutton from './components/claimbutton.svelte';
    import { store as devices } from '$lib/stores/devices'
    import { load } from '$lib/controller/device_controller'

    load()
    devices.subscribe(d => console.log(d))
</script>

<h2>Your devices</h2>

<Stack override={{ maxWidth: 700 }} >
    {#each $devices as device}
        <Card shadow='sm' padding='lg'>
            <Stack>
                <Group>
                    <Text weight="bold">MQTT Device</Text>
                    {#if device.claimed}
                        <Badge>Claimed</Badge>
                    {/if}
                    <Badge>{device.name}</Badge>
                </Group>
                <Text size="small">Received messages: {device.messages_sent == undefined ? "n/a" : device.messages_sent}</Text>
                
                <Claimbutton device_name={device.name} claimed={device.claimed} />
            </Stack>
        </Card>
    {/each}
</Stack>