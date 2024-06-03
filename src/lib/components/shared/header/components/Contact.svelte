<script>
	import PaperPlane from '$components/assets/symbols/PaperPlane.svelte';
</script>

<a href="/contact">
	<PaperPlane />
</a>

<style lang="scss">
	a {
		:global(svg) {
			transition: all 0.2s ease-out;
			&:hover {
				transform: translate(2px, -1px) rotate(10deg);
				color: var(--accent);
			}
		}

		@include media('m') {
			width: 16px;
		}

		@include media('xl') {
			width: 19px;
		}
	}
</style>
