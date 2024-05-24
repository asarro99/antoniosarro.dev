import { range } from './number';

export function getPaginationRange(totalPage: number, page: number, siblings: number) {
	const totalPageArr = 5 + siblings;
	if (totalPageArr >= totalPage) {
		return range(1, totalPage + 1);
	}
	const leftSiblingIdx = Math.max(page - siblings, 1);
	const rightSiblingIdx = Math.min(page + siblings, totalPage);

	const showLeftDots = leftSiblingIdx > 2;
	const showRightDots = rightSiblingIdx < totalPage - 2;

	const itemsCount = 3 + 2 * siblings;
	if (!showLeftDots && showRightDots) {
		const leftRange = range(1, itemsCount + 1);
		return [...leftRange, '...', totalPage];
	} else if (showLeftDots && !showRightDots) {
		const rightRange = range(totalPage - itemsCount + 1, totalPage + 1);
		return [1, '...', ...rightRange];
	} else {
		const middleRange = range(leftSiblingIdx, rightSiblingIdx + 1);
		return [1, '...', ...middleRange, '...', totalPage];
	}
}
