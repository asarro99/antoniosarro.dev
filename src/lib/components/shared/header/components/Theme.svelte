<script lang="ts">
	import DarkMode from '$components/assets/symbols/DarkMode.svelte';
	import { darkMode, toggleDarkMode, initDarkMode } from '$lib/stores/darkMode';

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
			<DarkMode />
		</div>
	</div>
</label>

<style lang="scss">
	.theme {
		grid-column: 2;
		grid-row: 3;
		align-items: center;

		position: relative;
		width: fit-content;
		cursor: pointer;

		margin: 0 auto;
		-webkit-tap-highlight-color: transparent;
	}

	.checkbox {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.toggle {
		border: 1px solid var(--text);
		border-radius: 1.5rem;
		background-color: var(--bg);
		width: 3rem;
		padding: 0.1rem;

		.icon {
			@include flex;
			background-color: var(--accent);
			border-radius: 50%;
			width: 1.2rem;
			height: 1.2rem;
			transition: transform 0.2s ease-in-out;
		}
	}

	.checkbox:checked ~ .toggle .icon {
		transform: translateX(calc(1.2rem + 0.28rem));
	}
</style>
