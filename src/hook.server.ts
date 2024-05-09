import { THEMES } from '$types/themes';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const getCookies: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');

	if (!theme || !Object.values(THEMES).includes(theme)) {
		return await resolve(event);
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});
};

export const handle: Handle = sequence(getCookies);
