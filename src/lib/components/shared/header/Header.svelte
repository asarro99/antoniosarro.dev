<script lang="ts">
	import { Contact, Navbar, Theme } from './components';
	import Logo from '$components/assets/Logo.svelte';
</script>

<header class="header">
	<div class="logo">
		<a href="/">
			<Logo />
		</a>
	</div>
	<Navbar />
	<Theme />
	<div class="contact">
		<Contact />
	</div>
</header>

<style lang="scss">
	.header {
		position: relative;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		align-items: center;
		min-width: 100%;
		margin-bottom: 16px;

		@include media('m') {
			grid-template-columns: repeat(11, 1fr);
			grid-template-rows: repeat(1, 1fr);
			gap: 16px;
			margin-bottom: 48px;
		}

		@include media('l') {
			grid-template-columns: repeat(15, 1fr);
		}

		@include media('xl') {
			grid-template-columns: repeat(17, 1fr);
			margin-bottom: 80px;
		}

		@include media('xxl') {
			grid-template-columns: repeat(19, 1fr);
			margin-bottom: 160px;
		}

		.logo {
			@include flex;
			grid-row: 1;
			margin-bottom: 6.5px;

			@include media('m') {
				grid-column: 1/4;
				margin-bottom: 0;
				justify-content: start;
			}

			@include media('l') {
				grid-column: 1/4;
				margin-bottom: 0;
				justify-content: start;
			}

			@include media('xl') {
				grid-column: 2/5;
				margin-bottom: 0;
			}

			a {
				color: var(--accent);
				width: 128px;

				@include media('xs') {
					width: 144px;
				}

				@include media('s') {
					width: 192px;
				}

				@include media('m') {
					width: 128px;
				}

				@include media('l') {
					width: 100%;
				}
			}
		}

		.contact {
			position: absolute;
			color: var(--text);
			top: 6.5px;
			right: 13px;
			width: 13px;

			@include media('xs') {
				right: 16px;
			}

			@include media('s') {
				right: 24px;
				width: 16px;
			}

			@include media('m') {
				@include flex;
				width: 100%;
				grid-row: 1;
				grid-column: 11;
				position: relative;
				top: 0;
				right: 0;
			}

			@include media('l') {
				grid-column: 15;
			}

			@include media('xxl') {
				grid-column: 17;
			}
		}
	}
</style>
