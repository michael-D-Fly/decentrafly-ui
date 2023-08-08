<script>
	import { token } from '$lib/stores/auth';
	import { store as user } from '$lib/stores/user';
</script>


<div class="corner">
</div>

<nav>
    <a href="/">Home</a>
	{#if ($user == undefined)}
		<a href="https://decentraflytestsignin.auth.us-east-1.amazoncognito.com/login?client_id=20ljuqkee1ci7n4b1nuomitf6o&redirect_uri=http%3A%2F%2Flocalhost%3A5173/login&response_type=token">Login</a>
	{:else}
		<a href="/account">Account</a>
		<a href="#" on:click={() => {token.update((v) => undefined)}}>Logout</a>
	{/if}
</nav>

<div class="corner">
</div>

<style>
	.corner {
		width: 3em;
		height: 3em;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
