<script lang="ts">
	import { Link } from '$components/assets/symbols';
	import { Svelte } from '$components/assets/techs/frameworks';
	import { Typescript } from '$components/assets/techs/languages';

	import logo from '$lib/assets/project_sample.webp';

	const { left }: { left?: boolean } = $props();
</script>

<div class="item {left && 'left'}">
	<div class="image">
		<img class="profile-pic" src={logo} alt="profile_sample pic" />
	</div>
	<div class="details">
		<span class="title">title</span>
		<div class="description">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</div>
		<div class="techs">
			<span class="icon">
				<Typescript />
			</span>
			<span class="icon">
				<Svelte />
			</span>
		</div>
		<div class="link">
			<Link />
		</div>
	</div>
</div>

<style lang="scss">
	.item {
		position: relative;
		border: 1px solid var(--accent);
		border-radius: 16px;
		background: var(--bg);
		padding: 5px 10px;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

		@include media('m') {
			grid-column: 1/13;
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 13px;
			min-width: 100%;

			border-radius: initial;
			border: initial;
			padding: initial;
			color: initial;
			background: initial;
			box-shadow: initial;
		}

		@include media('l') {
			grid-column: 1/16;
			grid-template-columns: repeat(15, 1fr);
		}

		@include media('xl') {
			grid-column: 1/18;
			grid-template-columns: repeat(17, 1fr);
		}

		@include media('xxl') {
			grid-column: 1/20;
			grid-template-columns: repeat(19, 1fr);
		}

		.image {
			display: none;

			@include media('m') {
				@include flex;
				grid-column: 2/9;
				overflow: hidden;
				border: 1.6px solid var(--accent);
				border-radius: 16px;
				width: 100%;
				height: 200px;

				@include media('l') {
					grid-column: 3/11;
					height: 250px;
				}

				@include media('xl') {
					grid-column: 3/12;
					height: 300px;
				}

				@include media('xxl') {
					grid-column: 3/13;
					height: 350px;
				}

				img {
					min-width: 130%;
					min-height: 130%;
					object-fit: cover;
				}
			}
		}

		.details {
			@include flex;
			flex-direction: column;

			@include media('m') {
				gap: 2px;
				position: absolute;
				top: 15px;
				grid-column: 7/12;
				width: 100%;
			}

			@include media('l') {
				grid-column: 9/14;
			}

			@include media('xl') {
				grid-column: 10/16;
			}

			@include media('xxl') {
				grid-column: 11/18;
			}

			.title {
				font-weight: 800;
				text-transform: uppercase;
				font-size: 13px;
				color: var(--accent);
				padding: 0;
				margin-bottom: 0.5;

				@include media('s') {
					font-size: 16px;
				}

				@include media('m') {
					align-self: flex-end;
					font-weight: 600;
					margin-right: 10px;
				}

				@include media('l') {
					font-size: 20px;
				}

				@include media('xl') {
					font-size: 22px;
				}

				@include media('xxl') {
					font-size: 24px;
				}
			}

			.description {
				font-weight: 400;
				font-size: 9.5px;
				margin-bottom: 19px;
				color: var(--text);

				@include media('s') {
					font-size: 12px;
				}

				@include media('m') {
					border: 1.6px solid var(--accent);
					border-radius: 16px;
					background: var(--bg);
					padding: 10px;
					width: 100%;
					margin-bottom: initial;

					p {
						text-transform: uppercase;
						font-size: 12px;
						text-align: end;
					}
				}

				@include media('l') {
					p {
						font-size: 14px;
					}
				}

				@include media('xl') {
					p {
						font-size: 16px;
					}
				}

				@include media('xl') {
					p {
						font-size: 18px;
					}
				}
			}

			.techs {
				position: absolute;
				@include flex;
				gap: 5px;
				bottom: 5px;
				left: 10px;
				color: var(--accent);

				@include media('m') {
					bottom: -22px;
					left: 102px;
				}

				@include media('l') {
					bottom: -24px;
					left: 105px;
				}

				@include media('xl') {
					bottom: -26px;
					left: 120px;
				}

				@include media('xxl') {
					bottom: -30px;
					left: 120px;
				}

				.icon {
					width: 14px;

					@include media('l') {
						width: 17px;
					}

					@include media('xl') {
						width: 20px;
					}

					@include media('xxl') {
						width: 24px;
					}
				}
			}

			.link {
				position: absolute;
				bottom: 5px;
				right: 10px;
				width: 15px;
				color: var(--accent);
				cursor: pointer;

				@include media('s') {
					width: 17.5px;
				}

				@include media('m') {
					bottom: -22px;
					right: 10px;
				}

				@include media('l') {
					bottom: -24px;
					width: 20px;
				}

				@include media('xl') {
					bottom: -26px;
					width: 22px;
				}

				@include media('xxl') {
					bottom: -30px;
					width: 24px;
				}
			}
		}
	}

	.left {
		.image {
			@include media('m') {
				grid-column: 5/12 !important;
			}

			@include media('l') {
				grid-column: 6/14 !important;
			}

			@include media('xl') {
				grid-column: 7/16 !important;
			}

			@include media('xxl') {
				grid-column: 8/18 !important;
			}
		}

		.details {
			@include media('m') {
				grid-column: 2/7 !important;
			}

			@include media('l') {
				grid-column: 3/8 !important;
			}

			@include media('xl') {
				grid-column: 3/9 !important;
			}

			@include media('xxl') {
				grid-column: 3/10 !important;
			}

			.title {
				@include media('m') {
					align-self: flex-start !important;
					margin-left: 10px !important;
				}
			}

			.description {
				@include media('m') {
					p {
						text-align: start !important;
					}
				}
			}

			.techs {
				@include media('m') {
					bottom: -22px !important;
					left: 124px !important;
				}

				@include media('xl') {
					left: 200px !important;
					bottom: -26px !important;
				}

				@include media('xxl') {
					left: 255px !important;
					bottom: -30px !important;
				}
			}

			.link {
				@include media('m') {
					bottom: -22px !important;
					left: 10px !important;
				}

				@include media('l') {
					bottom: -24px !important;
				}

				@include media('xl') {
					bottom: -26px !important;
				}

				@include media('xxl') {
					bottom: -30px !important;
				}
			}
		}
	}
</style>
