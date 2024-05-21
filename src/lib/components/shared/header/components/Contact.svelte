<script>
	import PaperPlane from '$components/assets/symbols/PaperPlane.svelte';
</script>

<a href="/contact" class="contact">
	<PaperPlane />
</a>

<style lang="scss">
	.contact {
		position: absolute;
		top: 0.35rem;
		right: 0rem;
		color: var(--text);
		width: 1rem;
		transform: scale(0.9);
		:global(svg) {
			transition: all 0.2s ease-out;

			&:hover {
				transform: translate(2px, -1px) rotate(10deg);
				color: var(--accent);
			}
		}
	}
</style>
