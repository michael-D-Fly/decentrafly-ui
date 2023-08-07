<script>
    import { token } from '$lib/stores/auth';
    import { goto } from '$app/navigation';
	


    async function checkWithServer() {
        const data = await fetch("https://decentrafly.org/api/user/hello",
        {
            "headers": {
                "Authorization": "Bearer " + $token
            }
        })
        const payload = await data.json()
    }
</script>

<h1>Welcome to Decentrafly</h1>

<button on:click={() => goto("https://decentraflytestsignin.auth.us-east-1.amazoncognito.com/login?client_id=20ljuqkee1ci7n4b1nuomitf6o&redirect_uri=http%3A%2F%2Flocalhost%3A5173/login&response_type=token")}>Login</button>
<button on:click={() => token.set("")}>Logout</button>

<button on:click={() => checkWithServer()}>Check with Server</button>
