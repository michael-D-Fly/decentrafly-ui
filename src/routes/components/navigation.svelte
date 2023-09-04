<script>
 import { store as user } from '$lib/stores/user';
 import { refresh } from '$lib/controller/auth_controller';

 let login_client_id="75ibjf4tfim15eqvb2tfs6v3uj"
 let login_flow="token"

 let login_redirect_uri = (import.meta.env.DEV) ? "http://localhost:5173/login" : "https://ui.decentrafly.org/login"
 let login_base_uri = "https://login-decentrafly-prod.auth.us-east-1.amazoncognito.com"
 let login_uri=`${login_base_uri}/login?client_id=${login_client_id}&redirect_uri=${encodeURI(login_redirect_uri)}&response_type=${login_flow}`

 refresh()
</script>


<div class="corner">
</div>

<nav>
    <a href="/">Home</a>
	{#if ($user.login_state != 'logged_in')}
	    <a href="{login_uri}">Login</a>
	{:else}
		<a href="/devices">Devices</a>
		<a href="/account">Account</a>
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
