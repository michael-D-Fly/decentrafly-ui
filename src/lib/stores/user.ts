import { writable } from 'svelte/store';
import { User } from '$lib/model/user';

type LoginState = 'initial' | 'expired' | 'logged_in' | 'logged_out';

type UserState = {
    user_info: User | undefined;
    login_state: LoginState;
}

function state_transition_logged_out(current_state: LoginState) {
    if (current_state == 'logged_in') {
        return 'expired';
    } else {
        return current_state;
    }
}

function createUserStore() {
    const { set, update, subscribe } = writable<UserState>({
        user_info: undefined,
        login_state: 'initial'
    })

    function update_to_unauthenticated() {
        update(current_user => { return {user_info: undefined, login_state: state_transition_logged_out(current_user.login_state)}})
    }

    function update_to_authenticated(user: User) {
        update(current_user => { return {user_info: {email: user.email, name: 'dunno'}, login_state: 'logged_in' }})
    }

    function log_out() {
        set({user_info: undefined, login_state: 'logged_out'})
    }

    return {
        subscribe,
        update_to_unauthenticated,
        update_to_authenticated,
        log_out
    }
}

export const store = createUserStore()