<script lang="ts">
	type Props = {
		title: string;
		start?: boolean;
	};

	const { title, start = true }: Props = $props();
</script>

<div class="title">
	{#if !start}
		<hr class="start" />
	{/if}
	<h1>{title}</h1>
	{#if start}
		<hr class="end" />
	{/if}
</div>

<style lang="scss">
	.title {
		@include flex;
		flex-direction: row;
		gap: 10px;
		padding-bottom: 10px;

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
			width: 100%;
			border: 0;
			height: 1px;

			&.start {
				background-image: linear-gradient(to left, var(--accent), rgba(0, 0, 0, 0));
			}

			&.end {
				background-image: linear-gradient(to right, var(--accent), rgba(0, 0, 0, 0));
			}

			@include media('xs') {
				height: 2px;
			}
		}
	}
</style>
