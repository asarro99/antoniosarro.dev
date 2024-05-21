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
		margin-bottom: 0.5rem;

		.wrapper {
			@include flex;
			flex-direction: column;
			gap: 0.35rem;

			.built {
				@include flex;
				flex-direction: column;

				.title {
					@include flex;
					gap: 0.2rem;

					span {
						font-size: 0.7rem;
						font-weight: bold;
						color: var(--text);
					}

					.heart {
						color: var(--accent);
					}
				}
			}

			.copyright {
				font-size: 0.75rem;
				color: var(--text);
				opacity: 0.8;

				.name {
					font-weight: bold;
					color: var(--accent);
				}
			}
		}
	}
</style>
