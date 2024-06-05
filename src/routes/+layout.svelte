<script lang="ts">
	import '@fontsource-variable/manrope';
	import '$styles/globals.scss';

	import { Background, Footer, Header } from '$components/shared';
	import { dev } from '$app/environment';
	import { navigating } from '$app/stores';
</script>

<!-- TODO: Change background refresh on navigating -->
{#if !dev}
	{#if !$navigating}
		<Background />
	{/if}
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
		max-width: 320px;
		padding: 25px 20px;

		@include media('xs') {
			padding: 25px 30px;
			max-width: 360px;
		}

		@include media('s') {
			padding: 25px 40px;
			max-width: 486px;
		}

		@include media('m') {
			padding: 25px 65px;
			max-width: 768px;
		}

		@include media('l') {
			padding: 25px 100px;
			max-width: 1024px;
		}

		@include media('xl') {
			padding: 24px 115px;
			max-width: 1280px;
		}

		@include media('xxl') {
			padding: 24px 130px;
			max-width: 1440px;
		}
	}
</style>
