<script lang="ts">
	import {
		AmbientLight,
		BoxGeometry,
		BufferAttribute,
		BufferGeometry,
		Color,
		DirectionalLight,
		Group,
		Mesh,
		MeshStandardMaterial,
		PerspectiveCamera,
		Points,
		PointsMaterial,
		Scene,
		WebGLRenderer
	} from 'three';
	import { FontLoader, OrbitControls, TextGeometry } from 'three/examples/jsm/Addons.js';
	import type { Contribution } from '$types/github';
	import InfiniteGridHelper from './InfiniteGrid';
	import { darkMode } from '$lib/stores/darkMode';

	const { contributions }: { contributions: Contribution[][] } = $props();

	let container: HTMLElement;

	// Constants
	const BOX_WIDTH = 13;
	const COLUMN_WIDTH = 7.5;
	const GRID_DISTANCE = 700;
	const GRID_SIZE = 15;
	const STAR_COUNT = 5000;
	const STAR_MAX_DISTANCE = 900;
	const STAR_MIN_DISTANCE = 700;
	const TEXT_SIZE = 4;

	// Variables
	let heigth: number;
	let width: number;
	let gridColor: string;

	// Three.js Variables
	const scene: Scene = new Scene();
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let grid: InfiniteGridHelper;
	const fontLoader = new FontLoader();

	let stars: Points;
	const vertices = new Float32Array(STAR_COUNT * 3);
	const particlesGeometry = new BufferGeometry();

	// Utility functions
	function hexToThreeColor(hex: string): Color {
		hex = hex.replace(/^#/, '');
		const r = parseInt(hex.slice(0, 2), 16) / 255;
		const g = parseInt(hex.slice(2, 4), 16) / 255;
		const b = parseInt(hex.slice(4, 6), 16) / 255;
		return new Color(r, g, b);
	}

	// Init effect
	$effect(() => {
		if (container.parentElement) {
			width = container.parentElement.clientWidth;
			heigth = container.parentElement.clientHeight;
		}

		//Create a camera
		camera = new PerspectiveCamera(75, width / heigth, 1, 1000);
		camera.position.set(0, 150, 200);

		// Create a renderer
		renderer = new WebGLRenderer({ antialias: true });
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, heigth);
		container.appendChild(renderer.domElement);

		// Add orbit controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.autoRotate = false;
		controls.autoRotateSpeed = 0.65;
		controls.minPolarAngle = Math.PI / 4;
		controls.maxPolarAngle = Math.PI / 2.2;
		controls.maxDistance = 400;

		// Add ambient light
		const ambientLight = new AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		// Add directional light
		const directionalLight = new DirectionalLight(0xffffff, 2);
		directionalLight.position.set(0, 2, 2);
		scene.add(directionalLight);
		const directionalLight2 = new DirectionalLight(0xffffff, 2);
		directionalLight2.position.set(0, 2, -2);
		scene.add(directionalLight2);

		function animate() {
			controls.update();
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}

		window.addEventListener('resize', () => {
			if (container && container.parentElement) {
				width = container.parentElement.clientWidth;
				heigth = container.parentElement.clientHeight;
			}
			camera.aspect = width / heigth;
			camera.updateProjectionMatrix();
			renderer.setSize(width, heigth);
		});

		animate();
	});

	// Grid and Stars
	$effect(() => {
		// Create Grid
		gridColor = $darkMode ? '#e15846' : '#e0b390';
		scene.remove(grid);
		grid = new InfiniteGridHelper(GRID_SIZE, GRID_SIZE, hexToThreeColor(gridColor), GRID_DISTANCE);
		scene.add(grid);

		// Create Stars
		scene.remove(stars);
		let vertexIndex = 0;
		for (let i = 0; i < STAR_COUNT * 3; i += 3) {
			const distance = Math.random() * (STAR_MAX_DISTANCE - STAR_MIN_DISTANCE) + STAR_MIN_DISTANCE;
			const phi = Math.acos(2 * Math.random() - 1);
			const theta = Math.random() * Math.PI * 2;

			const x = distance * Math.sin(phi) * Math.cos(theta);
			const y = distance * Math.sin(phi) * Math.sin(theta);
			const z = distance * Math.cos(phi);

			if (y > 0) {
				vertices[vertexIndex++] = x;
				vertices[vertexIndex++] = y;
				vertices[vertexIndex++] = z;
			}
		}
		particlesGeometry.setAttribute('position', new BufferAttribute(vertices, 3));
		const particlesMaterial = new PointsMaterial({
			color: $darkMode ? '#ffffff' : '#000000',
			sizeAttenuation: true,
			size: 3
		});
		stars = new Points(particlesGeometry, particlesMaterial);
		scene.add(stars);
	});

	function normalizeBoxValue(count: number, base = 4, offset = 2) {
		return count === 0 ? base : count > 40 ? count : count * (base * offset);
	}

	function getBoxColor(level: number, darkMode: boolean | null) {
		const colors: { [key: number]: string } = {
			0: darkMode ? '#121211' : '#D1CFCF',
			1: '#e5912f',
			2: '#e67e36',
			3: '#e56c3e',
			4: '#e15947'
		};
		return colors[level] || '';
	}

	$effect(() => {
		fontLoader.load('/fonts/helvetiker_bold.typeface.json', (font) => {
			contributions.forEach((row, i) => {
				const rowGroup = new Group();
				const position = 12 * i + 3 * i;

				row.forEach((day, j) => {
					if (day) {
						const columnWidthJ = COLUMN_WIDTH * j;
						const y = normalizeBoxValue(day.count);
						const color = getBoxColor(day.level, $darkMode);

						const dayGroup = new Group();

						const boxGeometry = new BoxGeometry(BOX_WIDTH, y, BOX_WIDTH);
						const daymesh = new Mesh(boxGeometry, new MeshStandardMaterial({ color }));
						daymesh.position.set(columnWidthJ + COLUMN_WIDTH * (j - 1) - 300, y / 2, COLUMN_WIDTH);
						daymesh.updateMatrix();
						daymesh.matrixAutoUpdate = false;
						dayGroup.add(daymesh);

						if (day.count) {
							daymesh.name = day.month + ' ' + day.day;
							const fontGeometry = new TextGeometry(day.count.toString(), {
								font,
								size: TEXT_SIZE,
								height: 1,
								bevelEnabled: true,
								bevelThickness: 0.1,
								bevelSize: 0.2,
								bevelSegments: 20
							});
							const fontMesh = new Mesh(fontGeometry, new MeshStandardMaterial({ color }));
							fontMesh.position.set(
								columnWidthJ + COLUMN_WIDTH * (j - 1) - 2 - 300,
								y + 2,
								COLUMN_WIDTH
							);
							fontMesh.updateMatrix();
							fontMesh.matrixAutoUpdate = false;
							dayGroup.add(fontMesh);
						}

						rowGroup.add(dayGroup);
					}
				});
				rowGroup.position.set(0, 0, position);
				scene.add(rowGroup);
			});
		});
	});
</script>

<div bind:this={container}></div>
