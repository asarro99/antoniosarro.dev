<script lang="ts">
	import { Link } from '$components/assets/symbols';
	import { Svelte } from '$components/assets/techs/frameworks';
	import { Typescript } from '$components/assets/techs/languages';
</script>

<div class="item">
	<div class="info">
		<span class="title">Project title</span>
		<span class="description"
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam</span
		>
		<div class="techs">
			<Typescript />
			<Svelte />
		</div>
		<div class="link">
			<Link />
		</div>
	</div>
</div>

<style lang="scss">
	.item {
		@include flex;
		flex-direction: column;
		background: var(--bg);

		.info {
			position: relative;
			@include flex;
			flex-direction: column;
			border-radius: 1rem;
			border: 0.1rem solid var(--accent);
			padding: 0.4rem;
			color: var(--text);
			box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

			.title {
				font-weight: 800;
				text-transform: uppercase;
				font-size: 0.8rem;
				color: var(--accent);
				padding: 0;
				margin-bottom: 0.5;
			}

			.description {
				font-weight: 400;
				font-size: 0.6rem;
				margin-bottom: 1.2rem;
			}

			.techs {
				position: absolute;
				bottom: 0.4rem;
				left: 0.4rem;
				@include flex;
				gap: 0.2rem;
				color: var(--accent);
				:global(svg) {
					width: 1rem;
					transform: scale(0.8);
				}
			}

			.link {
				position: absolute;
				bottom: 0.4rem;
				right: 0.4rem;
				width: 1rem;
				color: var(--accent);
				cursor: pointer;
			}
		}
	}
</style>
