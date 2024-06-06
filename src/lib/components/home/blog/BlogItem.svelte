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
		border: 1px solid var(--accent);
		border-radius: 15px;
		background: var(--bg);
		padding: 5px 10px;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

		@include media('m') {
			grid-column: 2/12;
		}

		@include media('l') {
			grid-column: 3/14;
		}

		@include media('xl') {
			grid-column: 3/16;
		}

		@include media('xxl') {
			grid-column: 3/18;
		}

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

				@include media('l') {
					font-size: 18px;
				}

				@include media('xl') {
					font-size: 20px;
				}

				@include media('xxl') {
					font-size: 22px;
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

				@include media('l') {
					font-size: 13px;
				}

				@include media('xl') {
					font-size: 15px;
				}

				@include media('xxl') {
					font-size: 17px;
				}
			}

			.description {
				font-weight: 500;
				font-size: 9.5px;
				margin-bottom: 5.5px;

				@include media('s') {
					font-size: 12px;
				}

				@include media('m') {
					font-size: 14px;
				}

				@include media('l') {
					font-size: 16px;
				}

				@include media('xl') {
					font-size: 18px;
				}

				@include media('xxl') {
					font-size: 20px;
				}
			}

			.category {
				font-weight: 200;
				font-size: 9.5px;

				@include media('s') {
					font-size: 11px;
				}

				@include media('l') {
					font-size: 13px;
				}

				@include media('xl') {
					font-size: 15px;
				}

				@include media('xxl') {
					font-size: 17px;
				}
			}
		}
		.visuals {
			@include flex($gap: 3px);
			position: absolute;
			top: 5px;
			right: 10px;
			color: var(--accent);

			.text {
				font-weight: 700;
				font-size: 11px;

				@include media('s') {
					font-size: 14.5px;
				}

				@include media('l') {
					font-size: 16.5px;
				}

				@include media('xl') {
					font-size: 18.5px;
				}

				@include media('xxl') {
					font-size: 20.5px;
				}
			}

			.icon {
				width: 15px;

				@include media('s') {
					width: 17.5px;
				}

				@include media('l') {
					width: 19.5px;
				}

				@include media('xl') {
					width: 21.5px;
				}

				@include media('xxl') {
					width: 23.5px;
				}
			}
		}
		.link {
			position: absolute;
			bottom: 5px;
			right: 10px;
			cursor: pointer;
			color: var(--accent);
			width: 15px;

			@include media('s') {
				width: 17.5px;
			}

			@include media('l') {
				width: 19.5px;
			}

			@include media('xl') {
				width: 21.5px;
			}
			@include media('xxl') {
				width: 23.5px;
			}
		}
	}
</style>
