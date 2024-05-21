<script>
	import { MoreButton, Title } from '$components/shared';
	import BlogItem from './BlogItem.svelte';
</script>

<div class="blog">
	<Title title={'RECENT BLOG POSTS'} />
	<div class="cards">
		<BlogItem />
		<BlogItem />
		<MoreButton title={'More Articles'} />
	</div>
	<hr class="line" />
</div>

<style lang="scss">
	.blog {
		position: relative;
		margin-bottom: 1rem;

		.cards {
			@include flex;
			flex-direction: column;
			gap: 1rem;
		}
		.line {
			width: 100vw;
			position: absolute;
			left: -1.5rem;
			bottom: 1rem;
			border: none;
			border-top: 1px solid rgba($color: #ebedda, $alpha: 0.25);
		}
	}
</style>
