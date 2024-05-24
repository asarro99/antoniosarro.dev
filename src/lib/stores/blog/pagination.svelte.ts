import { type Writable, writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type PaginationData = {
	postRangeHigh: number;
	postRangeLow: number;
	items: number;
};

const PAGINATION_CTX = 'PAGINATION_CTX';

export function setPaginationState() {
	const paginationState = writable<PaginationData>({
		postRangeHigh: 0,
		postRangeLow: 0,
		items: 0
	});
	setContext(PAGINATION_CTX, paginationState);
	return paginationState;
}

export function getPaginationState() {
	return getContext<Writable<PaginationData>>(PAGINATION_CTX);
}
