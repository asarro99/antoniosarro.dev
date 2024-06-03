<script lang="ts">
	let div: HTMLDivElement;

	$effect(() => {
		handleGuide(document.documentElement.clientWidth);
	});

	function handleGuide(width: number) {
		while (div.firstChild) {
			div.removeChild(div.lastChild || div.firstChild);
		}
		let newDiv = document.createElement('div');
		newDiv.style.width = '90px';
		newDiv.style.height = `${document.documentElement.scrollHeight}px`;
		newDiv.style.background = '#252525';
		switch (width) {
			case 320:
			case 360:
			case 486:
				Array.from({ length: 4 }, () => {
					div.appendChild(newDiv.cloneNode());
				});
				break;
			case 768:
				Array.from({ length: 12 }, () => {
					div.appendChild(newDiv.cloneNode());
				});
				break;
			case 1024:
				Array.from({ length: 15 }, () => {
					div.appendChild(newDiv.cloneNode());
				});
				break;
			case 1280:
				Array.from({ length: 17 }, () => {
					div.appendChild(newDiv.cloneNode());
				});
				break;
			case 1440:
				Array.from({ length: 19 }, () => {
					div.appendChild(newDiv.cloneNode());
				});
				break;
			default:
				break;
		}
	}

	function handleResize() {
		handleGuide(window.innerWidth);
	}
</script>

<svelte:window on:resize={handleResize} />

<div class="guide" bind:this={div}></div>

<style lang="scss">
	.guide {
		@include flex;
		position: absolute;
		z-index: -1000;
		top: 0;
		left: 0;
		flex-direction: row;
		gap: 15px;
		width: 100%;
		height: fit-content;
		padding: 24px 25px;

		@include media('xs') {
			padding: 24px 29px;
		}

		@include media('s') {
			padding: 24px 40px;
		}

		@include media('m') {
			padding: 24px 64px;
		}

		@include media('l') {
			padding: 24px 96px;
		}

		@include media('xl') {
			padding: 24px 115px;
		}

		@include media('xxl') {
			padding: 24px 130px;
		}
	}
</style>
