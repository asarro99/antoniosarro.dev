<script lang="ts">
	import Logo from '$components/assets/Logo.svelte';

	import { Contact, Navbar, Theme } from './components';
</script>

<header class="header">
	<Logo />
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
</style>
