<script lang="ts">
	import Logo from '$components/assets/Logo.svelte';

	import { Navbar, Theme } from './components';
	import Contact from './components/Contact.svelte';
</script>

<header class="header">
	<a class="logo" href="/">
		<Logo />
	</a>
	<Navbar />
	<Theme />
	<Contact />
</header>

<style lang="scss">
	.header {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 1rem;
	}

	.logo {
		@include flex;
		grid-column: 2;
	}
</style>
