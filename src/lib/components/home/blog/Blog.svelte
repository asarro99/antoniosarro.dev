<script>
	import { MoreButton, Title } from '$components/shared';
	import BlogItem from './BlogItem.svelte';
</script>

<div class="blog">
	<Title title={'RECENT BLOG POSTS'} />
	<div class="cards">
		<BlogItem
			data={{
				id: 1,
				title: 'His mother had always taught him',
				body: "His mother had always taught him not to ever think of himself asbetter than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
				tags: ['history', 'american', 'crime'],
				reactions: {
					likes: 192,
					dislikes: 303
				},
				views: 141,
				userId: 12
			}}
		/>
		<BlogItem
			data={{
				id: 1,
				title: 'His mother had always taught him',
				body: "His mother had always taught him not to ever think of himself asbetter than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
				tags: ['history', 'american', 'crime'],
				reactions: {
					likes: 192,
					dislikes: 303
				},
				views: 141,
				userId: 12
			}}
		/>
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
