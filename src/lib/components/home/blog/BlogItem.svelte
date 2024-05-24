<script lang="ts">
	import { Book, Eye } from '$components/assets/symbols';
	import type { DummyBlog } from '../../../../routes/blog/+page.server';

	const { data }: { data: DummyBlog } = $props();
</script>

<div class="card">
	<div class="info">
		<span class="title">{data.title.slice(0, 30)}</span>
		<span class="date">4th May 2024</span>
		<span class="description">
			{data.body}
		</span>
		<span class="category">{data.tags[0][0].toUpperCase() + data.tags[0].slice(1)} • 6 minutes</span
		>
	</div>
	<div class="visuals">
		<span>{data.views}</span>
		<Eye />
	</div>
	<a class="link" href="/">
		<Book />
	</a>
</div>

<style lang="scss">
	.card {
		position: relative;
		border: 0.1rem solid var(--accent);
		border-radius: 1rem;
		background: var(--bg);
		padding: 0.4rem;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

		.info {
			@include flex(center, flex-start);
			flex-direction: column;

			.title {
				color: var(--accent);
				font-weight: 600;
				font-size: 0.8rem;
				padding: 0;
				margin-bottom: -0.2em;
			}

			.date {
				color: rgba($color: #ebedda, $alpha: 0.8);
				font-weight: 700;
				font-size: 0.6rem;
				margin-bottom: 0.35rem;
			}

			.description {
				color: var(--text);
				font-weight: 500;
				font-size: 0.6rem;
				margin-bottom: 0.35rem;
			}

			.category {
				color: var(--text);
				font-weight: 200;
				font-size: 0.6rem;
			}
		}
		.visuals {
			@include flex();
			gap: 0.2rem;
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
			@include flex;
			color: var(--accent);

			span {
				font-weight: 700;
				font-size: 0.7rem;
			}

			:global(svg) {
				width: 1rem;
			}
		}
		.link {
			position: absolute;
			bottom: 0.4rem;
			right: 0.4rem;
			cursor: pointer;
			color: var(--accent);
			width: 1rem;
		}
	}
</style>
