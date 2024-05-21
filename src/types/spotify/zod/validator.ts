import type { CurrentlyPlayingPayload, RecentlyPlayedPayload, TokensPayload } from './types';
import {
	currentlyPlayingPayloadSchema,
	recentlyPlayedPayloadSchema,
	tokensSchemaPayload
} from './schema';

export const isTokensPayload = (maybeTokens: unknown): maybeTokens is TokensPayload =>
	tokensSchemaPayload.safeParse(maybeTokens).success;

export const isCurrentlyPlayingPayload = (
	maybeCurrentlyPlayingPayload: unknown
): maybeCurrentlyPlayingPayload is CurrentlyPlayingPayload =>
	currentlyPlayingPayloadSchema.safeParse(maybeCurrentlyPlayingPayload).success;

export const isRecentlyPlayedPayload = (
	maybeRecentlyPlayedPayload: unknown
): maybeRecentlyPlayedPayload is RecentlyPlayedPayload =>
	recentlyPlayedPayloadSchema.safeParse(maybeRecentlyPlayedPayload).success;
