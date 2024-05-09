<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
</script>

{#if $darkMode}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
		><path d="M44 29a2 2 0 0 0-2-1A16 16 0 0 1 22 8a2 2 0 0 0-2-2 20 20 0 1 0 24 24v-1Z" /></svg
	>
{:else}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><circle cx="12" cy="12" r="5.8" /><circle
			cx="3.1"
			cy="6.9"
			r="1.7"
			transform="rotate(-60 3 7)"
		/><circle cx="3.1" cy="17.1" r="1.7" transform="rotate(-120 3 17)" /><circle
			cx="12"
			cy="22.3"
			r="1.7"
		/><circle cx="20.9" cy="17.1" r="1.7" transform="rotate(-60 21 17)" /><circle
			cx="20.9"
			cy="6.9"
			r="1.7"
			transform="rotate(-120 21 7)"
		/><circle cx="12" cy="1.7" r="1.7" /></svg
	>
{/if}

<style lang="scss">
	svg {
		fill: var(--dm-toggle);
		width: 1rem;
		height: 1rem;
		animation: swing 1s normal;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}
		30% {
			transform: rotate(-45deg);
		}
		60% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
