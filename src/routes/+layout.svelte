<script lang="ts">
	import '@fontsource-variable/manrope';

	import Header from '$components/shared/header/Header.svelte';
	import '$styles/globals.scss';
</script>

<div class="container">
	<Header />
	<slot />
</div>

<style lang="scss">
	.container {
		@include flex;
		padding: 2rem 0rem;
		margin: 0 auto;
	}
</style>
