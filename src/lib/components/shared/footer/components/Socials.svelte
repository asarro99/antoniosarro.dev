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
		gap: 16px;

		@include media('xs') {
			gap: 17.5px;
		}

		@include media('s') {
			font-size: 19px;
		}

		.item {
			@include flex;
			gap: 1.6px;
			color: var(--accent);

			.text {
				font-size: 13px;
				font-weight: 600;

				@include media('xs') {
					font-size: 14.5px;
				}

				@include media('s') {
					font-size: 17.5px;
				}
			}
			.icon {
				width: 16px;
				height: 16px;
				transform: scale(0.55);

				@include media('s') {
					transform: scale(0.6);
				}
			}
		}
	}
</style>
