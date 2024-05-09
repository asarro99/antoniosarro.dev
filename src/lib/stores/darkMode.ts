import { THEMES } from '$types/themes';
import type { Writable } from 'svelte/store';
import { get, writable } from 'svelte/store';

// Creating a writable store for dark mode
export const darkMode: Writable<boolean | null> = writable(null);
const YEAR = 31_536_000;

// Function to initialize dark mode based on user preferences
export const initDarkMode = () => {
	// Checking if the body has a 'data-theme' attribute set to 'dark' or 'light' and setting the dark mode accordingly
	if (document.body.getAttribute('data-theme') === 'dark') {
		darkMode.set(true);
	} else if (document.body.getAttribute('data-theme') === 'light') {
		darkMode.set(false);
	}

	// Checking user's preference for dark mode and setting the dark mode if it's not already set
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
	const theme = get(darkMode);

	if (theme === null) {
		darkMode.set(prefersDarkMode.matches);
		performDarkMode();
	}

	// Adding an event listener to update dark mode when user's preference changes
	prefersDarkMode.addEventListener('change', (e) => {
		darkMode.set(e.matches);
		performDarkMode();
	});
};

// Function to toggle dark mode
export const toggleDarkMode = () => {
	darkMode.update((theme) => !theme);
	performDarkMode();
};

// Function to perform the dark mode by setting the theme, cookie, and body attribute
export const performDarkMode = () => {
	const theme = get(darkMode);
	if (theme !== null) {
		const cookieTheme = theme ? THEMES.DARK : THEMES.LIGHT;
		document.cookie = `theme=${cookieTheme}; max-age=${YEAR}; sameSite=none; secure ;path=/`;
		document.body.setAttribute('data-theme', cookieTheme);
	}
};
