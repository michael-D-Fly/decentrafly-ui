<script>
    import { page } from '$app/stores';
    import { uri_to_token_map } from '$lib/logic/oidc';
    import { refresh } from '$lib/controller/auth_controller';
    import { goto } from '$app/navigation';
    import { store as user } from '$lib/stores/user';
    
    const token_map = uri_to_token_map($page.url.hash);

    refresh(token_map.id_token)

    user.subscribe(user => {
        if (user.login_state == 'logged_in') {
            goto('/')
        }
    })
</script>

<p>We are logging you in, please wait. You should be redirected ...</p>