<script lang="ts">
	import { Search } from '$components/assets/symbols';
	import { getSearchState } from '$lib/stores/blog/search.svelte';

	const searchState = getSearchState();
</script>

<div class="container">
	<input type="text" placeholder="Search..." bind:value={$searchState.text} />
	<div class="icon">
		<Search />
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
		color: var(--accent);
		border-bottom: 1px solid var(--accent);

		input {
			width: 192px;
			padding: 1.6px;
			border: none;
			outline: none;
			background-color: transparent;
			text-align: center;
			font-weight: 500;
			font-size: 13px;

			&::placeholder {
				color: var(--accent);
			}
		}

		.icon {
			position: absolute;
			top: 20%;
			right: 3px;
			width: 16px;
			height: 16px;
			transform: scale(0.8);
		}
	}
</style>
