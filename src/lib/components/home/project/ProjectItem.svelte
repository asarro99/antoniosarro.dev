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
		@include flex;
		flex-direction: column;
		background: var(--bg);

		.info {
			position: relative;
			@include flex;
			flex-direction: column;
			border-radius: 16px;
			border: 1.6px solid var(--accent);
			padding: 6.5px;
			color: var(--text);
			box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);

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
			}

			.description {
				font-weight: 400;
				font-size: 9.5px;
				margin-bottom: 19px;

				@include media('s') {
					font-size: 11px;
				}
			}

			.techs {
				position: absolute;
				bottom: 6.5px;
				left: 6.5px;
				@include flex;
				gap: 5px;
				color: var(--accent);

				.icon {
					width: 16px;
					transform: scale(0.8);

					@include media('s') {
						transform: scale(1);
					}
				}
			}

			.link {
				position: absolute;
				bottom: 6.5px;
				right: 6.5px;
				width: 16px;
				color: var(--accent);
				cursor: pointer;

				@include media('s') {
					width: 17.5px;
				}
			}
		}
	}
</style>
