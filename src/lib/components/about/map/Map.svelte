<script lang="ts">
	import { House } from '$components/assets/symbols';
	import Leaflet from './Leaflet.svelte';
	import Marker from './Marker.svelte';
	import { Title } from '$components/shared';
</script>

<div class="map">
	<Title title={'WHERE I AM'} start={false} />
	<div class="canvas">
		<Leaflet view={[40.915168, 14.7954883]} zoom={13}>
			<Marker latLng={[40.915168, 14.7954883]} width={50} height={50}>
				<House />
			</Marker>
		</Leaflet>
	</div>
</div>

<style lang="scss">
	.map {
		margin-bottom: 16px;
		.canvas {
			width: 100%;
			height: 150px;
		}
	}
</style>
