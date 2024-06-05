<script lang="ts">
	import { MoreButton } from '$components/shared';
	import { Spotify } from '$components/shared/spotify';
	import type { TRACK_STATUS } from '$types/spotify';
	import type { Track } from '$types/spotify/zod/types';
	import logo from '$lib/assets/profile_sample.webp';

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
	<div class="profile-pic">
		<img class="profile-pic" src={logo} alt="profile_sample pic" />
	</div>
	<div class="spotify">
		<Spotify data={spotify} />
	</div>
	<div class="description">
		<p>
			Hi,I'm <span>Antonio</span>, a 24-year-old software engineer based in Italy with a lifelong
			<span>passion</span> for hardware and IT, constantly challenge myself to take that additional step
			for self-improvement.
		</p>
	</div>
	<div class="more">
		<MoreButton title={'More about me'} />
	</div>
	<hr class="line" />
</div>

<style lang="scss">
	.hero {
		position: relative;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 6.5px;
		min-width: 100%;
		margin-bottom: 20px;

		@include media('m') {
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: 80% 20%;
			gap: 13px;
			margin-bottom: 20px;
		}

		@include media('l') {
			grid-template-columns: repeat(15, 1fr);
		}

		@include media('xl') {
			grid-template-columns: repeat(17, 1fr);
			grid-template-rows: 85% 15%;
		}

		@include media('xxl') {
			grid-template-columns: repeat(19, 1fr);
			grid-template-rows: 85% 15%;
		}

		.profile-pic {
			position: relative;
			grid-column: 1/4;
			grid-row: 1/4;
			align-items: center;
			z-index: 1;

			@include media('m') {
				grid-column: 9/12;
				grid-row: 1;
			}

			@include media('l') {
				grid-column: 11/14;
			}

			@include media('xl') {
				grid-column: 11/15;
			}

			@include media('xxl') {
				grid-column: 13/17;
			}

			img {
				position: absolute;
				top: 0;
				object-fit: contain;
				transform: scale(1.35);

				@include media('xs') {
				}

				@include media('s') {
					top: -24px;
				}

				@include media('m') {
					transform: scale(1.45);
					top: 8px;
				}

				@include media('l') {
					transform: scale(1.5);
					top: 8px;
				}

				@include media('xl') {
					transform: scale(1.4);
					top: 0;
				}

				@include media('xxl') {
					transform: scale(1.7);
					top: -24px;
				}
			}
		}

		.spotify {
			grid-column: 4/8;
			grid-row: 1;

			@include media('xs') {
				@include flex(flex-end, center);
			}

			@include media('m') {
				position: absolute;
				grid-column: 9/13;
				grid-row: 2;
				z-index: 1;
				align-self: flex-end;
			}

			@include media('l') {
				grid-column: 12/16;
			}

			@include media('xxl') {
				grid-column: 13/18;
			}
		}

		.description {
			grid-column: 4/8;
			grid-row: 2;

			@include media('xs') {
				@include flex(flex-end, center);
				max-width: 176px;
			}

			@include media('s') {
				max-width: 256px;
			}

			@include media('m') {
				grid-column: 2/8;
				grid-row: 1;
				max-width: 100%;
			}

			@include media('l') {
				grid-column: 2/10;
			}

			@include media('xl') {
				grid-column: 2/10;
			}

			@include media('xxl') {
				grid-column: 2/11;
			}

			p {
				font-size: 11px;
				text-align: end;
				font-weight: 400;

				@include media('xs') {
					font-size: 13px;
				}

				@include media('s') {
					font-size: 16px;
				}

				@include media('m') {
					font-size: 22px;
				}

				@include media('l') {
					font-size: 28px;
				}

				@include media('xl') {
					font-size: 32px;
				}

				@include media('xxl') {
					font-size: 40px;
				}

				span {
					color: var(--accent);
					font-weight: bold;
				}
			}
		}

		.more {
			grid-column: 6/8;
			z-index: 1;
			width: max-content;

			@include media('s') {
				width: 100%;
				@include flex(flex-end, center);
			}

			@include media('m') {
				grid-column: 6/8;
				grid-row: 2;
				align-self: flex-start;
			}

			@include media('l') {
				grid-column: 8/10;
			}

			@include media('xl') {
				grid-column: 7/10;
			}

			@include media('xxl') {
				grid-column: 8/11;
			}
		}

		.line {
			width: 100%;
			position: absolute;
			bottom: 17px;
			border: 0;
			height: 1px;
			background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0),
				rgba($color: #ebedda, $alpha: 0.25),
				rgba(0, 0, 0, 0)
			);

			@include media('m') {
				bottom: 30px;
			}

			@include media('l') {
				bottom: 45px;
			}

			@include media('xl') {
				bottom: 35px;
			}

			@include media('xxl') {
				bottom: 45px;
			}
		}
	}
</style>
