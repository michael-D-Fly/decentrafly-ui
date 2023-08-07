<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { token } from '$lib/stores/auth';
    import { uri_to_token_map } from '$lib/logic/oidc';
    
    const token_map = uri_to_token_map($page.url.hash);
    token.set(token_map.id_token);

    goto("/")
</script>

<p>You should be redirected ...</p>