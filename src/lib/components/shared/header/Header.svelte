<script lang="ts">
	import { Contact, Navbar, Theme } from './components';
	import Logo from '$components/assets/Logo.svelte';
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
		position: relative;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: 0.3rem;
		align-items: center;
		margin-bottom: 1rem;

		.logo {
			grid-row: 1;
			margin: 0 auto;
			color: var(--accent);
			width: 10rem;
			height: 1.6rem;
		}
	}
</style>
