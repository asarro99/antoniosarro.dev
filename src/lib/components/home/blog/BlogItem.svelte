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
		<span class="text">{data.views}</span>
		<span class="icon">
			<Eye />
		</span>
	</div>
	<a class="link" href="/">
		<span class="icon">
			<Book />
		</span>
	</a>
</div>

<style lang="scss">
	.card {
		position: relative;
		border: 16px solid var(--accent);
		border-radius: 16px;
		background: var(--bg);
		padding: 6.5px;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

		.info {
			@include flex(center, flex-start);
			flex-direction: column;

			.title {
				color: var(--accent);
				font-weight: 600;
				font-size: 13px;
				padding: 0;
				margin-bottom: -0.2em;

				@include media('s') {
					font-size: 16px;
				}
			}

			.date {
				color: rgba($color: #ebedda, $alpha: 0.8);
				font-weight: 700;
				font-size: 9.5px;
				margin-bottom: 5.5px;
				@include media('s') {
					font-size: 11px;
				}
			}

			.description {
				color: var(--text);
				font-weight: 500;
				font-size: 9.5px;
				margin-bottom: 5.5px;
				@include media('s') {
					font-size: 11px;
				}
			}

			.category {
				color: var(--text);
				font-weight: 200;
				font-size: 9.5px;

				@include media('s') {
					font-size: 11px;
				}
			}
		}
		.visuals {
			@include flex();
			gap: 3px;
			position: absolute;
			top: 8px;
			right: 8px;
			@include flex;
			color: var(--accent);

			.text {
				font-weight: 700;
				font-size: 11px;

				@include media('s') {
					font-size: 14.5px;
				}
			}

			.icon {
				width: 16px;

				@include media('s') {
					width: 17.5px;
				}
			}
		}
		.link {
			position: absolute;
			bottom: 8px;
			right: 8px;
			cursor: pointer;
			color: var(--accent);
			width: 16px;

			@include media('s') {
				width: 17.5px;
			}
		}
	}
</style>
