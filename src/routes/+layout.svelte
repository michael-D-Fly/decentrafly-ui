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

	</div>
</SvelteUIProvider>

<style>
	:global(body) {
		padding: 2rem;
	}
</style>