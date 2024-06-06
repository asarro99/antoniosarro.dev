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
		grid-column: 1/8;

		@include media('s') {
			grid-column: 1/10;
		}

		@include media('m') {
			grid-row: 1;
			grid-column: 4/9;
		}

		@include media('l') {
			grid-column: 5/12;
		}

		@include media('xl') {
			grid-column: 6/13;
		}

		@include media('xxl') {
			grid-column: 7/14;
		}

		ul {
			@include flex;
			gap: 15px;
			padding: 0;
			list-style: none;

			@include media('s') {
				gap: 22.5px;
			}

			@include media('l') {
				gap: 22.5px;
			}

			@include media('xl') {
				gap: 32px;
			}

			li {
				position: relative;

				.item {
					font-size: 14px;
					font-weight: normal;
					text-transform: uppercase;

					@include media('xs') {
						font-size: 14.5px;
					}

					@include media('s') {
						font-size: 19px;
					}

					@include media('m') {
						font-size: 14.5px;
					}

					@include media('l') {
						font-size: 17.5px;
					}

					@include media('xl') {
						font-size: 19px;
					}
				}

				.slider {
					position: absolute;
					bottom: 0;
					width: 50%;
					height: 2px;
					background-image: linear-gradient(
						to left,
						rgba(0, 0, 0, 0),
						var(--accent),
						rgba(0, 0, 0, 0)
					);
					left: 50%;
					transform: translate(-50%);
				}
			}
		}
	}
</style>
