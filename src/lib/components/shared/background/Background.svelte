<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';

	const handleSize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;

	interface Dot {
		startX: number;
		startY: number;
		x: number;
		y: number;
		hover: boolean;
	}
	let dots: Dot[] = [];
	const DOT_RADIUS = 2;
	const DOT_PADDING = 25;

	const handleDots = () => {
		dots = [];
		for (let y = DOT_RADIUS; y < canvas.height; y += DOT_RADIUS * 2 + DOT_PADDING) {
			for (let x = DOT_RADIUS; x < canvas.width; x += DOT_RADIUS * 2 + DOT_PADDING) {
				dots.push({
					startX: x,
					startY: y,
					x: x,
					y: y,
					hover: false
				});
			}
		}
	};

	const PI2 = Math.PI * 2;

	const draw = () => {
		if (context) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < dots.length; i++) {
				context.beginPath();
				let dot = dots[i];
				context.moveTo(dot.x, dot.y);
				if (dot.hover) {
					context.arc(dot.x, dot.y, 3, 0, PI2);
					context.fillStyle = '#E15846';
				} else {
					context.arc(dot.x, dot.y, DOT_RADIUS, 0, PI2);
					context.fillStyle = $darkMode ? '#282827' : '#d6d6ce';
				}
				context.fill();
			}
		}
	};

	const MOUSE_RADIUS = 40;
	const MOUSE_RADIUS_SQUARED = MOUSE_RADIUS * MOUSE_RADIUS;
	let mouseIsDown = false;
	let mouseX = 0,
		mouseY = 0;
	let tick = 0;

	let frameID: number;
	const frame = () => {
		for (let i = 0; i < dots.length; i++) {
			let dot = dots[i];

			let dotX = dot.x - mouseX;
			let dotY = dot.y - mouseY;

			if (mouseIsDown && dotX * dotX + dotY * dotY < MOUSE_RADIUS_SQUARED) {
				dot.x += dotX / 15;
				dot.y += dotY / 15;
				dot.hover = true;
				tick++;

				if (tick > 60) (mouseIsDown = false), (tick = 0);
			} else if (dot.x == dot.startX && dot.y == dot.startY) {
			} else {
				dotX = dot.x - dot.startX;
				dotY = dot.y - dot.startY;
				dot.x -= dotX / 20;
				dot.y -= dotY / 20;
				dot.hover = false;
			}
		}

		draw();
		frameID = requestAnimationFrame(frame);
	};

	$effect(() => {
		handleSize();
		context = canvas.getContext('2d');
		handleDots();

		frameID = requestAnimationFrame(frame);

		return () => {
			cancelAnimationFrame(frameID);
		};
	});

	const handleResize = () => {
		handleSize();
		handleDots();
	};

	const handleMouse = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		mouseX = e.clientX;
		mouseY = e.clientY;

		mouseIsDown = true;
	};

	const handleTouch = (e: TouchEvent) => {
		e.stopPropagation();

		mouseX = e.touches[0].clientX;
		mouseY = e.touches[0].clientY;

		mouseIsDown = true;
	};
</script>

<svelte:window
	on:resize={handleResize}
	on:scroll={handleResize}
	on:mousemove={handleMouse}
	on:touchmove={handleTouch}
/>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1000;
	}
</style>
