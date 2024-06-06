<script lang="ts">
	import { Spotify } from '$components/assets/socials';
	import { TRACK_STATUS } from '$types/spotify';
	import type { Track } from '$types/spotify/zod/types';
	import { normalizeTrackArtists } from '$types/spotify/normalize/normalizeTrackArtists';

	const {
		data
	}: {
		data: {
			status: TRACK_STATUS;
			track: Track;
		};
	} = $props();
</script>

<div class="spotify">
	<div class="image">
		<img src={data.track.album.images[1].url} alt={data.track.album.name} />
	</div>
	<div class="info">
		<div class="status">
			{#if data.status === TRACK_STATUS.ONLINE}
				<div>
					<span>Now playing</span>
					<span class="bar-wrapper">
						<span class="bar bar1"></span>
						<span class="bar bar2"></span>
						<span class="bar bar3"></span>
					</span>
				</div>
			{:else}
				<p>Offline. Last played</p>
			{/if}
		</div>
		<div class="song">
			<p class="album">
				{data.track.album.name.substring(0, 15)} • {new Date(
					data.track.album.release_date
				).getFullYear()}
			</p>
			<p class={data.track.name.length > 15 ? 'title' : 'title-short'}>
				<span>{data.track.name}</span>
			</p>
			<p class="artist">{normalizeTrackArtists(data.track.artists).substring(0, 15)}</p>
		</div>
	</div>
	<div class="logo">
		<div class="icon">
			<Spotify />
		</div>
	</div>
</div>

<style lang="scss">
	.spotify {
		@include grid($col: 6);
		grid-template-rows: 1fr;

		background: var(--bg);
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
		border: 1px solid var(--accent);
		border-radius: 10px;
		padding: 5px;
		max-width: 160px;

		@include media('s') {
			max-width: 192px;
		}

		@include media('xl') {
			max-width: 100%;
		}

		.image {
			grid-column: 1/3;
			@include flex;
			margin-right: 5px;

			img {
				width: 45px;
				height: 45px;
				border-radius: 5px;

				@include media('s') {
					width: 55px;
					height: 55px;
				}

				@include media('xl') {
					width: 70px;
					height: 70px;
				}

				@include media('xxl') {
					width: 90px;
					height: 90px;
				}
			}
		}

		.info {
			@include flex(center, flex-start, $gap: 5px, $dir: column);
			grid-column: 3/6;
			margin-right: 5px;
			max-height: 45px;
			min-width: max-content;

			@include media('s') {
				max-height: 55px;
			}

			@include media('xl') {
				max-height: 70px;
			}

			@include media('xxl') {
				max-height: 90px;
			}

			.status {
				font-size: 7px;
				font-weight: 600;
				color: var(--accent);

				@include media('s') {
					font-size: 8px;
				}

				@include media('xl') {
					font-size: 10.5px;
				}

				@include media('xxl') {
					font-size: 13px;
				}

				.bar-wrapper {
					margin-left: 3px;
					.bar {
						display: inline-block;
						position: relative;
						margin-right: 0.5px;
						width: 2px;
						height: 1px;
						overflow: hidden;
						background-color: var(--accent);
						color: transparent;
						animation-name: pulse;
						animation-duration: 1s;
						animation-iteration-count: infinite;
						border-radius: 25%;

						&1 {
							animation-delay: 0.5s;
						}

						&3 {
							animation-delay: 1.2s;
						}
					}
				}
			}

			.song {
				.album {
					font-size: 7px;
					font-weight: 600;
					color: var(--muted-text);

					@include media('s') {
						font-size: 8px;
					}

					@include media('xl') {
						font-size: 11px;
					}

					@include media('xxl') {
						font-size: 14.5px;
					}
				}

				.title {
					display: flex;
					white-space: nowrap;
					overflow: hidden;
					width: 64px;

					span {
						display: inline-block;
						padding-left: 100%;
						animation: marquee 15s linear infinite;
						font-weight: 700;
						font-size: 8.8px;

						@include media('xl') {
							font-size: 10.5px;
						}

						@include media('xxl') {
							font-size: 13.5px;
						}
					}
				}

				.title-short {
					font-weight: 700;
					font-size: 8.8px;

					@include media('xl') {
						font-size: 10.5px;
					}

					@include media('xxl') {
						font-size: 13.5px;
					}
				}

				.artist {
					font-weight: 600;
					font-size: 7.2px;

					@include media('s') {
						font-size: 10.5px;
					}

					@include media('xxl') {
						font-size: 13.5px;
					}
				}
			}
		}

		.logo {
			grid-column: 6;
			align-self: start;
			@include flex(flex-end, flex-end);

			.icon {
				color: var(--accent);
				width: 12px;
				height: 12px;

				@include media('s') {
					width: 15px;
					height: 15px;
				}

				@include media('xl') {
					width: 20px;
					height: 20px;
				}

				@include media('xxl') {
					width: 25px;
					height: 25px;
				}
			}
		}
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}

	@keyframes pulse {
		0% {
			height: 1px;
			margin-top: 0;
		}
		10% {
			height: 6px;
			margin-top: -6px;
		}
		50% {
			height: 3px;
			margin-top: -3px;
		}
		60% {
			height: 5px;
			margin-top: -5x;
		}
		80% {
			height: 6px;
			margin-top: -6px;
		}
		100% {
			height: 1px;
			margin-top: 0;
		}
	}
</style>
