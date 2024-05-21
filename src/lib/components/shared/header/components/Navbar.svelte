<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	interface Route {
		label: string;
		path: string;
	}

	const routes: Route[] = [
		{ label: 'About', path: '/about' },
		{ label: 'Projects', path: '/projects' },
		{ label: 'Blog', path: '/blog' },
		{ label: 'Tools', path: '/tools' }
	];

	let currentRoute = $derived($page.url.pathname);
</script>

<nav class="navbar">
	<ul>
		{#each routes as { label, path }}
			<li>
				<a class="item" href={path}>{label}</a>
				{#if currentRoute === path}
					<div transition:fade={{ duration: 150 }} class="slider"></div>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.navbar {
		grid-row: 2;

		ul {
			display: flex;
			gap: 1.1rem;
			padding: 0;
			list-style: none;

			li {
				position: relative;
				.item {
					font-size: 0.9rem;
					font-weight: normal;
					text-transform: uppercase;
					color: var(--text);
				}
				.slider {
					position: absolute;
					bottom: 0;
					width: 50%;
					height: 2px;
					background: var(--accent);
					left: 50%;
					transform: translate(-50%);
				}
			}
		}
	}
</style>
