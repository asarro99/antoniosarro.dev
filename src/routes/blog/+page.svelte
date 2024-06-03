<script lang="ts">
	import { Pagination, Search } from '$components/blog';
	import BlogItem from '$components/home/blog/BlogItem.svelte';
	import { setPaginationState } from '$lib/stores/blog/pagination.svelte.js';
	import { setSearchState } from '$lib/stores/blog/search.svelte.js';

	const searchState = setSearchState();
	const paginationState = setPaginationState();

	const { data } = $props();

	let searchFiltered = $derived.by(() => {
		return data.posts.filter((post) => {
			return (
				$searchState.text.length === 0 ||
				post.title.toLowerCase().includes($searchState.text.toLowerCase())
			);
		});
	});

	$effect(() => {
		$paginationState.items = searchFiltered.length;
	});
</script>

<div class="blog">
	<div class="controls">
		<Search />
		<Pagination />
	</div>
	<div class="list">
		{#each searchFiltered as item, i}
			{#if i >= $paginationState.postRangeLow && i < $paginationState.postRangeHigh}
				<BlogItem data={item} />
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.blog {
		@include flex;
		flex-direction: column;
		gap: 24px;
		margin-bottom: 16px;

		.controls {
			@include flex;
			flex-direction: column;
			gap: 16px;
		}

		.list {
			@include flex;
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
