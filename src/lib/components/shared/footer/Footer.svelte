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
		<Socials />
		<span class="copyright">
			&copy; {new Date().getFullYear()}{' '}
			<a href="/" class="name"> Antonio Sarro </a>
			. All rights reserved.
		</span>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		margin-bottom: 8px;

		.wrapper {
			@include flex;
			flex-direction: column;
			gap: 5px;

			.built {
				@include flex;
				flex-direction: column;
				gap: 3px;

				.title {
					@include flex;
					gap: 3px;

					span {
						font-size: 11px;
						font-weight: bold;
						color: var(--text);

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

			.copyright {
				font-size: 12px;
				color: var(--text);
				opacity: 0.8;

				@include media('xs') {
					font-size: 13px;
				}

				@include media('s') {
					font-size: 14px;
				}

				.name {
					font-weight: bold;
					color: var(--accent);
				}
			}
		}
	}
</style>
