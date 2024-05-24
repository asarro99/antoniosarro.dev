import { type Writable, writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type SearchData = {
	text: string;
};

const SEARCH_CTX = 'SEARCH_CTX';

export function setSearchState() {
	const searchState = writable<SearchData>({
		text: ''
	});
	setContext(SEARCH_CTX, searchState);
	return searchState;
}

export function getSearchState() {
	return getContext<Writable<SearchData>>(SEARCH_CTX);
}
