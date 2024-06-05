<script>
	import { Line, MoreButton, Title } from '$components/shared';
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
		<div class="more">
			<MoreButton title={'More Posts'} />
		</div>
	</div>
	<Line />
</div>

<style lang="scss">
	.blog {
		position: relative;
		min-width: 100%;
		margin-bottom: 20px;

		.cards {
			@include flex;
			flex-direction: column;
			gap: 15px;

			@include media('m') {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				gap: 13px;
				margin-bottom: 20px;
			}

			@include media('l') {
				grid-template-columns: repeat(15, 1fr);
				gap: 25px;
			}

			@include media('xl') {
				grid-template-columns: repeat(17, 1fr);
			}

			@include media('xxl') {
				grid-template-columns: repeat(19, 1fr);
			}

			.more {
				align-self: flex-end;
				z-index: 1;

				@include media('m') {
					grid-column: 10/12;
					grid-row: 3;
				}

				@include media('l') {
					grid-column: 12/14;
				}

				@include media('xl') {
					width: max-content;
					grid-column: 14/16;
				}

				@include media('xxl') {
					grid-column: 16/18;
				}
			}
		}
	}
</style>
