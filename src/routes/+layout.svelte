<script lang="ts">
	import '@fontsource-variable/manrope';
	import '$styles/globals.scss';

	import { Background, Header } from '$components/shared';
	import { Footer } from '$components/shared/footer';
	import { navigating } from '$app/stores';
</script>

<!-- TODO: Change background refresh on navigating -->
{#if !$navigating}
	<Background />
{/if}

<div class="container">
	<Header />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		@include flex;
		flex-direction: column;
		padding: 1.2rem 1.55rem;
	}
</style>
