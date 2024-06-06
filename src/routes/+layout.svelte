<script lang="ts">
	import '@fontsource-variable/manrope';
	import '$styles/globals.scss';

	import { Background, Footer, Header } from '$components/shared';
	import { dev } from '$app/environment';
	import { navigating } from '$app/stores';
</script>

<!-- TODO: Change background refresh on navigating -->
{#if !dev}
	{#if !$navigating}
		<Background />
	{/if}
{/if}
<div class="container">
	<Header />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		$width_padding: (
			xxs: (
				320px,
				20px
			),
			xs: (
				360px,
				30px
			),
			s: (
				486px,
				40px
			),
			m: (
				768px,
				65px
			),
			l: (
				1024px,
				100px
			),
			xl: (
				1280px,
				115px
			),
			xxl: (
				1440px,
				130px
			)
		);
		@each $breakpoint, $values in $width_padding {
			@if ($breakpoint != xxs) {
				@include media(#{$breakpoint}) {
					max-width: list.nth($values, 1);
					padding: 25px list.nth($values, 2);
				}
			} @else {
				@include flex($dir: column);
				max-width: list.nth($values, 1);
				padding: 25px list.nth($values, 2);
			}
		}
	}
</style>
