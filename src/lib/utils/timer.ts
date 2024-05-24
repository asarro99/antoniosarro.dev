export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
	callback: T,
	delay: number
) {
	let timer: number;
	return (...args: Parameters<T>) => {
		return new Promise<ReturnType<T> | Error>((resolve, reject) => {
			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				try {
					const output = callback(...args);
					resolve(output);
				} catch (err) {
					if (err instanceof Error) {
						reject(err);
					}
					reject(new Error(`An error has occurred:${err}`));
				}
			}, delay);
		});
	};
}

export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
	callback: T,
	delay: number
) {
	let timerFlag: ReturnType<typeof setTimeout> | null = null;
	return (...args: Parameters<T>) => {
		if (timerFlag === null) {
			callback(...args);
			timerFlag = setTimeout(() => {
				timerFlag = null;
			}, delay);
		}
	};
}
