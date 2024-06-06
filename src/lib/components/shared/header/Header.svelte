<script lang="ts">
	import { Contact, Navbar, Theme } from './components';
	import Logo from '$components/assets/Logo.svelte';
</script>

<header class="header">
	<Logo />
	<Navbar />
	<Theme />
	<Contact />
</header>

<style lang="scss">
	.header {
		position: relative;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(3, 1fr);
		row-gap: 10px;
		align-items: center;
		margin-bottom: 20px;

		@include media('s') {
			grid-template-columns: repeat(9, 1fr);
			margin-bottom: 50px;
		}

		@include media('m') {
			@include grid($col: 11, $row: 1, $gap: 15px);
		}

		@include media('l') {
			@include grid($col: 15, $row: 1, $gap: 15px);
		}

		@include media('xl') {
			@include grid($col: 17, $row: 1, $gap: 15px);
			margin-bottom: 80px;
		}

		@include media('xxl') {
			@include grid($col: 19, $row: 1, $gap: 15px);
			margin-bottom: 160px;
		}
	}
</style>
