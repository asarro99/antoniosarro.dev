<script lang="ts">
	import { RightTop } from '$components/assets/symbols';

	const SOCIALS = [
		{
			name: 'Github',
			link: `https://github.com/antoniosarro`
		},
		{
			name: 'X',
			link: `https://twitter.com/`
		},
		{
			name: 'Linkedin',
			link: `https://www.linkedin.com/in/antoniosarro/`
		},
		{
			name: 'Mail',
			link: `mailto:contact@antoniosarro.dev`
		}
	];
</script>

<div class="socials">
	{#each SOCIALS as social}
		<a class="link" href={social.link} rel="noreferrer noopener" target="_blank">
			<div class="item">
				<span class="text">{social.name}</span>
				<span class="icon"><RightTop /></span>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	.socials {
		@include flex;
		gap: 15px;
		color: var(--accent);

		@include media('xs') {
			gap: 17.5px;
		}

		@include media('s') {
			gap: 19px;
		}

		@include media('l') {
			gap: 15px;
		}

		.item {
			@include flex($gap: 4px);

			.text {
				font-size: 12px;
				font-weight: 600;

				@include media('xs') {
					font-size: 14.5px;
				}

				@include media('s') {
					font-size: 17.5px;
				}

				@include media('l') {
					font-size: 15px;
				}

				@include media('xl') {
					font-size: 17px;
				}
			}
			.icon {
				width: 6px;
				height: 6px;

				@include media('xl') {
					width: 8px;
					height: 8px;
				}
			}
		}
	}
</style>
