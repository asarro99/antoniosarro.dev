<script lang="ts">
	import { type Snippet, getContext } from 'svelte';

	type L = typeof window.L;

	// Props
	type Props = {
		width: number;
		height: number;
		latLng: L.LatLngExpression;
		children: Snippet;
	};
	const { width, height, latLng, children }: Props = $props();

	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');

	let marker = $state<L.Marker | undefined>();
	let markerElement: HTMLElement;

	$effect(() => {
		const L = window.L;
		const map = getMap();

		if (map) {
			let icon = L.divIcon({
				html: markerElement,
				className: 'map-marker',
				iconSize: L.point(width, height)
			});
			marker = L.marker(latLng, { icon }).addTo(map);
		}

		return () => {
			marker?.remove();
			marker = undefined;
		};
	});
</script>

<div class="marker" bind:this={markerElement}>
	{#if marker}
		{@render children()}
	{/if}
</div>

<style lang="scss">
	.marker {
		width: 21px;
		height: 21px;
		color: var(--accent);
	}
</style>
