<script>
    import { store as user } from '$lib/stores/user';
</script>

<h2>Your account</h2>
{#if $user.login_state == 'logged_in' }
    <p>Email: {$user.user_info.email}</p>
    <p>Name: {$user.user_info.name}</p>
{:else}
    <p>Youre not logged in.</p>
{/if}