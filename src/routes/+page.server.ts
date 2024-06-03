import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';
import {
	isCurrentlyPlayingPayload,
	isRecentlyPlayedPayload,
	isTokensPayload
} from '$types/spotify/zod/validator';
import type { PageServerLoad } from './$types';
import { TRACK_STATUS } from '$types/spotify';
import type { Track } from '$types/spotify/zod/types';

const SPOTIFY_REDIRECT_URI = 'http://localhost:5173/';
const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const SPOTIFY_RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export const load: PageServerLoad = async () => {
	return {
		spotify: await getSpotifyData()
	};
};

type Cache = {
	token: {
		expiresIn: number;
		accessToken: string;
	};
	song: {
		track?: Track;
		expiresIn: number;
		status: string;
	};
};

const cache: Cache = {
	token: {
		expiresIn: 0,
		accessToken: ''
	},
	song: {
		status: TRACK_STATUS.ONLINE,
		expiresIn: 0
	}
};

async function getSpotifyData() {
	const currentTime = Date.now();

	if (cache.token.expiresIn < currentTime) {
		const tokenResponse = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: SPOTIFY_REFRESH_TOKEN,
				redirect_uri: SPOTIFY_REDIRECT_URI,
				client_id: SPOTIFY_CLIENT_ID,
				client_secret: SPOTIFY_CLIENT_SECRET
			})
		}).then((res) => res.json());

		if (!isTokensPayload(tokenResponse)) {
			return { error: 'getSpotifyData: invalid token response' };
		}

		cache.token.accessToken = tokenResponse.access_token;
		cache.token.expiresIn = currentTime + tokenResponse.expires_in * 1000;
	}

	if (cache.song.expiresIn < currentTime) {
		const nowPlayingResponse = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${cache.token.accessToken}`
			}
		});

		if (nowPlayingResponse.status === 200) {
			const songData = await nowPlayingResponse.json();
			if (isCurrentlyPlayingPayload(songData)) {
				cache.song = {
					track: songData.item,
					status: TRACK_STATUS.ONLINE,
					expiresIn: Date.now() + 5 * 60 * 1000
				};

				return {
					track: songData.item,
					status: songData.is_playing ? TRACK_STATUS.ONLINE : TRACK_STATUS.OFFLINE
				};
			}
		}

		const recentlyPlayed = await fetch(SPOTIFY_RECENTLY_PLAYED_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${cache.token.accessToken}`
			}
		});

		const songData = await recentlyPlayed.json();

		if (!isRecentlyPlayedPayload(songData)) {
			return { error: 'Failed to fetch data' };
		}

		cache.song = {
			track: songData.items[0].track,
			status: TRACK_STATUS.OFFLINE,
			expiresIn: Date.now() + 2 * 60 * 1000
		};

		return {
			track: songData.items[0].track,
			status: TRACK_STATUS.OFFLINE
		};
	}
	return {
		track: cache.song.track,
		status: cache.song.status
	};
}
