<script>
	import { Scss, Typescript } from '$components/assets/techs/languages';
	import { Svelte } from '$components/assets/techs/frameworks';
</script>

<ul>
	<li>
		<a href="https://kit.svelte.dev/" rel="noreferrer noopener" target="_blank">
			<div class="icon">
				<Svelte />
			</div>
		</a>
	</li>
	<li>
		<a href="https://www.typescriptlang.org" rel="noreferrer noopener" target="_blank">
			<div class="icon">
				<Typescript />
			</div>
		</a>
	</li>
	<li>
		<a href="https://sass-lang.com" rel="noreferrer noopener" target="_blank">
			<div class="icon">
				<Scss />
			</div>
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		@include flex;
		gap: 9.5px;
		padding: 0;
		margin: 0;
		list-style-type: none;

		li {
			.icon {
				color: var(--accent);
				width: 16px;
				transform: scale(0.9);

				@include media('xs') {
					transform: scale(1);
				}

				@include media('s') {
					transform: scale(1.2);
				}
			}
		}
	}
</style>
