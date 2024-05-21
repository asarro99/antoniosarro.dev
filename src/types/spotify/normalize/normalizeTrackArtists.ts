import type { Artist } from '../zod/types';

export const normalizeTrackArtists = (artists: Artist[]) =>
	artists
		.slice(0, 2)
		.map((artist) => artist.name)
		.join(', ') + (artists.length > 2 ? ` and ${artists.length - 2} more` : '');
