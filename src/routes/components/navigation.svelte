<script>
	import { token } from '$lib/stores/auth';
	import { store as user } from '$lib/stores/user';

	let login_client_id="20ljuqkee1ci7n4b1nuomitf6o"
	let login_flow="token"

	let login_redirect_uri = (import.meta.env.DEV) ? "http://localhost:5173/login" : "https://ui.decentrafly.org/login"
	let login_base_uri = "https://decentraflytestsignin.auth.us-east-1.amazoncognito.com"
	let login_uri=`${login_base_uri}/login?client_id=${login_client_id}&redirect_uri=${encodeURI(login_redirect_uri)}&response_type=${login_flow}`

</script>


<div class="corner">
</div>

<nav>
    <a href="/">Home</a>
	{#if ($user == undefined)}
	    <a href="{login_uri}">Login</a>
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
