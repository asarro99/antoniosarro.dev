<script>
	import { Builts, Socials } from './components';
	import { Heart } from '$components/assets/symbols';
</script>

<footer>
	<div class="wrapper">
		<div class="built">
			<div class="title">
				<span>Built with</span>
				<span class="heart"><Heart /></span>
				<span>using</span>
			</div>
			<Builts />
		</div>
		<div class="socials">
			<Socials />
		</div>
		<div class="copyright">
			&copy; {new Date().getFullYear()}{' '}
			<a href="/" class="name"> Antonio Sarro </a>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;

		.wrapper {
			@include flex;
			flex-direction: column;
			gap: 5px;

			@include media('l') {
				display: grid;
				grid-template-columns: repeat(15, 1fr);
			}

			@include media('xl') {
				grid-template-columns: repeat(17, 1fr);
			}

			@include media('xxl') {
				grid-template-columns: repeat(19, 1fr);
			}

			.built {
				@include flex;
				flex-direction: column;
				gap: 3px;

				@include media('l') {
					grid-row: 1;
					grid-column: 7/10;
				}

				@include media('xl') {
					grid-column: 8/11;
				}

				@include media('xxl') {
					grid-column: 9/12;
				}

				.title {
					@include flex;
					gap: 3px;

					span {
						font-size: 11px;
						font-weight: bold;

						@include media('xs') {
							font-size: 13px;
						}

						@include media('s') {
							font-size: 16px;
						}
					}

					.heart {
						color: var(--accent);
					}
				}
			}

			.socials {
				@include media('l') {
					grid-column: 12/15;
				}

				@include media('xl') {
					grid-column: 13/16;
				}

				@include media('xxl') {
					grid-column: 14/17;
				}
			}

			.copyright {
				font-size: 12px;
				opacity: 0.8;

				@include media('xs') {
					font-size: 13px;
				}

				@include media('s') {
					font-size: 14px;
				}

				@include media('l') {
					grid-row: 1;
					grid-column: 1/6;
					font-size: 14px;
				}

				@include media('xl') {
					grid-column: 2/7;
					font-size: 16px;
				}

				@include media('xxl') {
					grid-column: 3/8;
				}

				.name {
					font-weight: bold;
					color: var(--accent);
				}
			}
		}
	}
</style>
