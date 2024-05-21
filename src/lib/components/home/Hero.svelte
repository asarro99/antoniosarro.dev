<script lang="ts">
	import { RightTop } from '$components/assets/symbols';
	import { Spotify } from '$components/shared/spotify';
	import type { TRACK_STATUS } from '$types/spotify';
	import type { Track } from '$types/spotify/zod/types';
	import logo from '$lib/assets/profile_sample.png';

	const {
		spotify
	}: {
		spotify: {
			status: TRACK_STATUS;
			track: Track;
		};
	} = $props();
</script>

<div class="hero">
	<img class="profile-pic" src={logo} alt="profile_sample pic" />
	<div class="side">
		<Spotify data={spotify} />
		<div class="description">
			<p>
				Hi,I'm <span>Antonio</span>, a 24-year-old software engineer based in Italy with a lifelong
				<span>passion</span> for hardware and IT, constantly challenge myself to take that additional
				step for self-improvement.
			</p>
		</div>
		<div class="more">
			<span class="text">More about me</span>
			<span class="icon"> <RightTop /></span>
		</div>
	</div>
	<hr class="line" />
</div>

<style lang="scss">
	.hero {
		position: relative;
		width: 100%;
		margin-bottom: 1rem;

		.profile-pic {
			position: absolute;
			left: -0.7rem;
			bottom: 0.75rem;
			z-index: 1;
			width: 9.5rem;
			object-fit: contain;
		}

		.side {
			@include flex(center, flex-end);
			flex-direction: column;
			gap: 0.4rem;

			.description {
				z-index: 2;
				max-width: 9rem;
				p {
					font-size: 0.7rem;
					text-align: end;
					font-weight: 400;

					span {
						color: var(--accent);
						font-weight: bold;
					}
				}
			}

			.more {
				@include flex;
				background: var(--accent);
				color: var(--text);
				width: 5rem;
				height: 1.5rem;
				border-radius: 1rem;
				box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
				z-index: 2;

				.text {
					text-transform: uppercase;
					font-size: 0.4rem;
					font-weight: bold;
				}

				.icon {
					width: 1rem;
					transform: scale(0.35);
				}
			}
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
