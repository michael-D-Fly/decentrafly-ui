<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Navigation from "./components/navigation.svelte";
</script>

<SvelteUIProvider withGlobalStyles themeObserver={'dark'}>
	<div class="app">
		<Navigation></Navigation>

		<main>
			<slot />
		</main>

		<footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer>
	</div>
</SvelteUIProvider>
