<script lang="ts">
	import { darkMode } from '$lib/stores/darkMode';
	import { debounce } from '$utils/timer';

	const handleSize = () => {
		currentWidth = window.innerWidth;
		canvas.width = window.innerWidth;
		canvas.height = document.documentElement.scrollHeight;
	};

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let currentWidth = 0;

	interface Dot {
		startX: number;
		startY: number;
		x: number;
		y: number;
		hover: boolean;
	}
	let dots: Dot[] = [];

	const DOT_RADIUS = 1.5;
	const DOT_PADDING = 20;
	const DEFAULT_PADDING = 10;

	const calculatePadding = (size: number): number => {
		let dotWidth = DOT_PADDING + DOT_RADIUS * 2;
		let numDots = Math.floor(size / dotWidth);

		let leftoverSpace = size - dotWidth * numDots;

		if (leftoverSpace / 2 < DEFAULT_PADDING) {
			leftoverSpace += dotWidth;
		}

		return leftoverSpace / 2;
	};

	const handleDots = () => {
		dots = [];

		let horizontalPadding = calculatePadding(canvas.width);
		let verticalPadding = calculatePadding(canvas.height);

		for (let y = verticalPadding; y < canvas.height; y += DOT_RADIUS * 2 + DOT_PADDING) {
			for (let x = horizontalPadding; x < canvas.width; x += DOT_RADIUS * 2 + DOT_PADDING) {
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
					context.fillStyle = $darkMode ? '#2a2a29' : '#d6d6ce';
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

	//LIMIT FPS
	const FPS_LIMIT = 15;
	let now;
	let then = Date.now();
	let interval = 1000 / FPS_LIMIT;
	let delta;

	let frameID: number;
	const frame = () => {
		frameID = requestAnimationFrame(frame);

		now = Date.now();
		delta = now - then;

		if (mouseIsDown) {
			then = now - (delta % interval);

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
					continue;
				} else {
					dotX = dot.x - dot.startX;
					dotY = dot.y - dot.startY;
					dot.x -= dotX / 20;
					dot.y -= dotY / 20;
					dot.hover = false;
				}
			}

			draw();
		} else {
			if (delta > interval) {
				then = now - (delta % interval);

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
						continue;
					} else {
						dotX = dot.x - dot.startX;
						dotY = dot.y - dot.startY;
						dot.x -= dotX / 20;
						dot.y -= dotY / 20;
						dot.hover = false;
					}
				}

				draw();
			}
		}
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
		// Check to avoid refresh on mobile scrolling
		let newWidth = window.innerWidth;
		if (newWidth !== currentWidth) {
			handleSize();
			handleDots();
			currentWidth = newWidth;
		}
	};

	const handleMouse = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		mouseX = e.pageX;
		mouseY = e.pageY;

		mouseIsDown = true;
	};

	const handleTouch = (e: TouchEvent) => {
		e.stopPropagation();

		mouseX = e.touches[0].pageX;
		mouseY = e.touches[0].pageY;

		mouseIsDown = true;
	};
</script>

<svelte:window
	on:mousemove={handleMouse}
	on:touchmove={handleTouch}
	on:resize={debounce(handleResize, 250)}
/>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1000;
		width: 100%;
		height: fit-content;
	}
</style>
