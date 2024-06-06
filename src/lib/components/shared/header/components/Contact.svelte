<script>
	import PaperPlane from '$components/assets/symbols/PaperPlane.svelte';
</script>

<a href="/contact">
	<PaperPlane />
</a>

<style lang="scss">
	a {
		grid-row: 1;
		grid-column: 7;
		width: 14px;
		margin-left: auto;

		@include media('s') {
			grid-column: 9;
			width: 16px;
		}

		@include media('m') {
			grid-column: 11;
			margin-right: auto;
		}

		@include media('l') {
			grid-column: 15;
		}

		@include media('xl') {
			grid-column: 17;
		}

		@include media('xl') {
			grid-column: 19;
		}

		:global(svg) {
			transition: all 0.2s ease-out;
			&:hover {
				transform: translate(2px, -1px) rotate(10deg);
				color: var(--accent);
			}
		}
	}
</style>
