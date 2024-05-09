<script lang="ts">
	const routes = [
		{ label: 'About', path: '/about' },
		{ label: 'Projects', path: '/projects' },
		{ label: 'Blog', path: '/blog' },
		{ label: 'Tools', path: '/tools' }
	];
</script>

{#snippet route({ label, path })}
	<li>
		<a href={path}>{label}</a>
	</li>
{/snippet}

<nav class="navbar">
	<ul>
		{#each routes as r}
			{@render route(r)}
		{/each}
	</ul>
</nav>

<style lang="scss">
	.navbar {
		grid-row: 2;
		grid-column: 2;

		ul {
			display: flex;
			gap: 1rem;
			padding: 0;
			list-style: none;

			:global(li a) {
				font-size: 1rem;
				font-weight: normal;
				text-transform: uppercase;
			}
		}
	}
</style>
