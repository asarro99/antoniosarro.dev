<script lang="ts">
	import { Moon, Sun } from '$components/assets/symbols';
	import { darkMode, initDarkMode, toggleDarkMode } from '$lib/stores/darkMode';

	$effect(() => {
		initDarkMode();
	});
</script>

<label class="theme" for="theme-switch">
	<input
		name="theme-switch"
		id="theme-switch"
		type="checkbox"
		class="checkbox"
		checked={$darkMode}
		onchange={toggleDarkMode}
	/>
	<div class="toggle">
		<div class="icon">
			{#if $darkMode}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</div>
	</div>
</label>

<style lang="scss">
	.theme {
		grid-row: 3;
		position: relative;
		margin: 0 auto;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		height: fit-content;
	}

	.checkbox {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
		cursor: pointer;
	}

	.toggle {
		background-color: var(--bg);
		border: 1px solid var(--text);
		border-radius: 1.5rem;
		width: 2.5rem;

		.icon {
			@include flex;
			background-color: var(--accent);
			border-radius: 1rem;
			width: 1.2rem;
			height: 1.2rem;
			padding: 0.2rem;
			transition: transform 0.2s ease-in-out;

			:global(svg) {
				fill: var(--dm-toggle);
				width: 1rem;
				height: 1rem;
				animation: swing 1s normal;
			}

			@keyframes swing {
				0% {
					transform: rotate(0deg);
				}
				30% {
					transform: rotate(-45deg);
				}
				60% {
					transform: rotate(45deg);
				}
				100% {
					transform: rotate(0deg);
				}
			}
		}
	}

	.checkbox:checked ~ .toggle .icon {
		transform: translateX(calc(1.2rem));
	}
</style>
