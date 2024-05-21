<script lang="ts">
	import { Dot, DotOutline } from '$components/assets/symbols';
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

<div class="status">
	<div class="pagination">
		<Dot />
		<DotOutline />
	</div>
	<div class="content">
		<div class="details">
			<span class="logo">
				<Spotify />
			</span>
			<div class="group">
				<span class="presence">
					{#if data.status === TRACK_STATUS.ONLINE}
						<div>
							Now playing
							<span class="bar-wrapper">
								<span class="bar bar1"></span>
								<span class="bar bar2"></span>
								<span class="bar bar3"></span>
							</span>
						</div>
					{:else}
						Offline. Last played
					{/if}
				</span>
				<div class={data.track.name.length > 13 ? 'title' : 'title-short'}>
					<span>{data.track.name}</span>
				</div>
				<div
					class={normalizeTrackArtists(data.track.artists).length > 12 ? 'artist' : 'artist-short'}
				>
					<span>{normalizeTrackArtists(data.track.artists)}</span>
				</div>
			</div>
		</div>

		<img src={data.track.album.images[0].url} alt={data.track.album.name} />
	</div>
</div>

<style lang="scss">
	.status {
		@include flex;
		flex-direction: column;
		border: 0.1rem solid var(--accent);
		border-radius: 1rem;
		background: var(--bg);
		padding: 0.3rem;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
		max-width: 10rem;

		.pagination {
			@include flex;
			gap: 0.2rem;
			color: var(--accent);

			:global(svg) {
				width: 0.25rem;
			}
		}

		.content {
			grid-column: 1;
			display: grid;
			grid-template-columns: repeat(2, 1fr);

			.details {
				grid-column: 1;
				place-self: start;
				@include flex(center, flex-start);
				flex-direction: column;

				.logo {
					color: var(--accent);
					width: 1.5rem;
				}

				.group {
					@include flex(center, flex-start);
					flex-direction: column;
					color: var(--text);
					font-size: 0.5rem;

					.presence {
						color: var(--accent);
						font-weight: bold;
						margin-bottom: -0.2rem;

						div {
							@include flex;
						}

						.bar-wrapper {
							margin-left: 0.4rem;
							.bar {
								display: inline-block;
								position: relative;
								margin-right: 1px;
								width: 3px;
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

					.title {
						white-space: nowrap;
						overflow: hidden;
						width: 5rem;
						margin-bottom: -0.2rem;

						span {
							display: inline-block;
							padding-left: 100%;
							animation: marquee 15s linear infinite;
							font-size: 0.55rem;
							font-weight: 600;
						}
					}

					.title-short {
						font-size: 0.55rem;
						font-weight: 600;
						max-width: 4rem;
						margin-bottom: -0.2rem;
					}

					.artist {
						white-space: nowrap;
						overflow: hidden;
						width: 5rem;
						margin-bottom: -0.2rem;

						span {
							display: inline-block;
							padding-left: 100%;
							animation: marquee 15s linear infinite;
							font-size: 0.5rem;
							font-weight: 300;
						}
					}

					.artist-short {
						font-size: 0.5rem;
						font-weight: 300;
						max-width: 5rem;
						margin-bottom: -0.2rem;
					}
				}
			}

			img {
				grid-column: 2;
				place-self: end;
				width: 3.5rem;
				object-fit: contain;
				border-radius: 1rem;
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
			height: 10px;
			margin-top: -10px;
		}
		50% {
			height: 5px;
			margin-top: -5px;
		}
		60% {
			height: 7px;
			margin-top: -7x;
		}
		80% {
			height: 10px;
			margin-top: -10px;
		}
		100% {
			height: 1px;
			margin-top: 0;
		}
	}
</style>
