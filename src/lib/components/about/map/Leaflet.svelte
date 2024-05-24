<script lang="ts">
	import { type Snippet, setContext, tick } from 'svelte';
	import { darkMode } from '$lib/stores/darkMode';

	type L = typeof window.L;

	// Props
	type Props = {
		bounds?: L.LatLngBoundsExpression;
		view: L.LatLngExpression;
		zoom: number;
		children: Snippet;
	};
	const { bounds, view, zoom, children }: Props = $props();

	let mapElement = $state<HTMLElement>();

	// Leaflet variable
	let map = $state<L.Map | undefined>();
	let darkLayer: L.TileLayer;
	let lightLayer: L.TileLayer;

	$effect(() => {
		const loadResource = setInterval(() => {
			if (window.L) {
				const L = window.L;

				darkLayer = L.tileLayer(
					'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
					{
						attribution: `&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
					}
				);
				lightLayer = L.tileLayer(
					'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
					{
						attribution:
							'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					}
				);

				if (mapElement) {
					map = L.map(mapElement, { zoomControl: false, attributionControl: false })
						// example to expose map events to parent components:
						.on('popupopen', async (e) => {
							await tick();
							e.popup.update();
						});
				}
				clearInterval(loadResource);
			}
		}, 500);

		return () => {
			map?.remove();
			map = undefined;
		};
	});

	$effect(() => {
		if (map) {
			if ($darkMode) {
				lightLayer.remove();
				darkLayer.addTo(map);
			} else {
				darkLayer.remove();
				lightLayer.addTo(map);
			}

			if (bounds) {
				map.fitBounds(bounds);
			} else if (view && zoom) {
				map.setView(view, zoom);
			}
		}
	});

	setContext('map', {
		getMap: () => map
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
	<script
		src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		crossorigin=""
	></script>
</svelte:head>

<div class="container" bind:this={mapElement}>
	{#if map}
		{@render children()}
	{/if}
	<div class="container_skeleton">
		<div class="loading"></div>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		border: 0.1rem solid var(--accent);
		background: var(--bg);
	}

	.container_skeleton {
		@include flex;
		width: 100%;
		height: 150px;
		background: var(--bg);
		border: 0.1rem solid var(--accent);
		border-radius: 1rem;

		.loading {
			display: inline-block;
			width: 25px;
			height: 25px;
			border: 1px solid rgb(255 255 255 / 30%);
			border-radius: 50%;
			border-top: 2px solid var(--accent);
			animation: spin 1s ease-in-out infinite;

			@keyframes spin {
				to {
					transform: rotate(360deg);
				}
			}
		}
	}
</style>
