<script>
	import PaperPlane from '$components/assets/symbols/PaperPlane.svelte';
</script>

<a href="/contact" class="contact">
	<PaperPlane />
</a>

<style lang="scss">
	.contact {
		@include flex;
		grid-column: 3;
		grid-row: 1;
	}
</style>
