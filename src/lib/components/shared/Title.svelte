<script lang="ts">
	type Props = {
		title: string;
		start?: boolean;
	};

	const { title, start = true }: Props = $props();
</script>

<div class="title">
	{#if !start}
		<hr />
	{/if}
	<h1>{title}</h1>
	{#if start}
		<hr />
	{/if}
</div>

<style lang="scss">
	.title {
		@include flex;
		flex-direction: row;
		gap: 0.5rem;
		padding-bottom: 0.5rem;

		h1 {
			position: relative;
			font-weight: 600;
			font-size: 0.9rem;
			color: var(--accent);
			white-space: nowrap;
		}
		hr {
			border: none;
			border-top: 2px solid var(--accent);
			width: 100%;
		}
	}
</style>
