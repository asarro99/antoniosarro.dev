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
		gap: 8px;
		padding-bottom: 8px;

		h1 {
			position: relative;
			font-weight: 600;
			font-size: 14px;
			color: var(--accent);
			white-space: nowrap;

			@include media('s') {
				font-size: 18px;
			}

			@include media('l') {
				font-size: 20px;
			}

			@include media('xl') {
				font-size: 21px;
			}

			@include media('xxl') {
				font-size: 22px;
			}
		}
		hr {
			border: none;
			border-top: 2px solid var(--accent);
			width: 100%;

			@include media('s') {
				border-top: 3px solid var(--accent);
			}
		}
	}
</style>
