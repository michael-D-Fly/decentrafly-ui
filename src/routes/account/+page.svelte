<script>
    import { store as user } from '$lib/stores/user';

    user.subscribe(v => console.log(v))
</script>

<h2>Your account</h2>
{#if $user }
    <p>Email: {$user.user_info.email}</p>
    <p>Name: {$user.user_info.name}</p>
{:else}
    <p>Youre not logged in.</p>
{/if}