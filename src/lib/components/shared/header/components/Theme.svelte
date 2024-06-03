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

		@include media('m') {
			grid-row: 1;
			grid-column: 10;
		}

		@include media('l') {
			grid-column: 14;
		}

		@include media('xxl') {
			grid-column: 16;
		}
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
		border-radius: 24px;
		width: 32px;

		@include media('s') {
			width: 38px;
		}

		@include media('m') {
			width: 32px;
		}

		@include media('xl') {
			width: 40px;
		}

		.icon {
			@include flex;
			background-color: var(--accent);
			border-radius: 16px;
			width: 16px;
			height: 16px;
			padding: 3px;
			transition: transform 0.3s ease-in-out;

			@include media('s') {
				width: 19px;
				height: 19px;
			}

			@include media('m') {
				width: 16px;
				height: 16px;
			}

			@include media('xl') {
				width: 19px;
				height: 19px;
			}

			:global(svg) {
				fill: var(--dm-toggle);
				width: 16px;
				height: 16px;
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
		transform: translateX(calc(14px));

		@include media('s') {
			transform: translateX(calc(17px));
		}

		@include media('m') {
			transform: translateX(calc(14.5px));
		}

		@include media('xl') {
			transform: translateX(calc(17.5px));
		}
	}
</style>
