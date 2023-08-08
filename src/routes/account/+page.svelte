<script>
    import { store as user } from '$lib/stores/user';

    user.subscribe(v => console.log(v))
</script>

<h2>Your account</h2>
{#if $user }
    <p>Email: {$user.email}</p>
    <p>ID: {$user.user_id}</p>
    <p>Email verified: {$user.email_verified}</p>
{:else}
    <p>Youre not logged in.</p>
{/if}