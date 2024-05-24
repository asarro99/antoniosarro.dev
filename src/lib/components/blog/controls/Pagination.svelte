<script lang="ts">
	import { Arrow, DoubleArrow } from '$components/assets/symbols';
	import { getPaginationRange } from '$utils/pagination';
	import { getPaginationState } from '$lib/stores/blog/pagination.svelte';

	const paginationState = getPaginationState();

	const POSTS_PER_PAGE = 4;
	let totalPages = $derived(Math.ceil($paginationState.items / POSTS_PER_PAGE));
	let currentPage = $state(1);

	function setCurrentPage(newPage: number) {
		currentPage = newPage;
		$paginationState.postRangeHigh = currentPage * POSTS_PER_PAGE;
		$paginationState.postRangeLow = $paginationState.postRangeHigh - POSTS_PER_PAGE;
	}

	let pagination = $derived(getPaginationRange(totalPages, currentPage, 1));

	$paginationState.postRangeHigh = 1 * POSTS_PER_PAGE;
	$paginationState.postRangeLow = $paginationState.postRangeHigh - POSTS_PER_PAGE;
</script>

<div class="pagination">
	<button
		class={currentPage > 1 ? 'icon' : 'disabled'}
		onclick={(event) => {
			event.preventDefault();
			if (currentPage > 1) {
				setCurrentPage(1);
			}
		}}
	>
		<DoubleArrow />
	</button>
	<button
		class={currentPage > 1 ? 'icon' : 'disabled'}
		onclick={(event) => {
			event.preventDefault();
			if (currentPage > 1) {
				setCurrentPage(currentPage - 1);
			}
		}}
	>
		<Arrow />
	</button>
	{#each pagination as item}
		<button
			class="page"
			onclick={(event) => {
				event.preventDefault();
				if (typeof item === 'number') {
					setCurrentPage(item);
				}
			}}
			class:active={item === currentPage}><span>{item}</span></button
		>
	{/each}
	<button
		class={currentPage < totalPages ? 'icon' : 'disabled'}
		onclick={(event) => {
			event.preventDefault();
			if (currentPage < totalPages) {
				setCurrentPage(currentPage + 1);
			}
		}}
	>
		<Arrow />
	</button>
	<button
		class={currentPage < totalPages ? 'icon' : 'disabled'}
		onclick={(event) => {
			event.preventDefault();
			if (currentPage < totalPages) {
				setCurrentPage(Math.ceil(totalPages));
			}
		}}
	>
		<DoubleArrow />
	</button>
</div>

<style lang="scss">
	.pagination {
		@include flex;
		gap: 0.35rem;
		width: 100%;

		.page {
			@include flex;
			cursor: pointer;
			width: 1.1rem;
			height: 1.1rem;
			padding: 0.1rem;
			border: 1px solid var(--accent);
			border-radius: 0.3rem;
			font-weight: 600;
			background: var(--bg);
			color: var(--accent);

			&.active {
				background: var(--accent);
				color: var(--bg);
			}

			span {
				font-size: 0.65rem;
			}
		}

		.icon {
			@include flex;
			cursor: pointer;
			width: 1.1rem;
			height: 1.1rem;
			padding: 0.2rem;
			border: 1px solid var(--accent);
			background: var(--bg);
			border-radius: 0.3rem;
			color: var(--accent);

			&:nth-child(-n + 2) {
				transform: rotate(180deg);
			}
		}

		.disabled {
			@include flex;
			width: 1.1rem;
			height: 1.1rem;
			padding: 0.2rem;
			border: 1px solid var(--accent-muted);
			background: var(--bg-muted);
			border-radius: 0.3rem;
			color: var(--accent-muted);

			&:nth-child(-n + 2) {
				transform: rotate(180deg);
			}
		}
	}
</style>
