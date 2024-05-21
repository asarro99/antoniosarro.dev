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
		gap: 1rem;

		.item {
			@include flex;
			color: var(--accent);

			.text {
				font-size: 0.8rem;
				font-weight: 600;
			}
			.icon {
				width: 1.2rem;
				height: 1.2rem;
				transform: scale(0.45);
			}
		}
	}
</style>
