import compression from '@polka/compression';
import { handler } from './build/handler.js';
import helmet from 'helmet';
import polka from 'polka';

polka()
	.use(
		helmet({
			contentSecurityPolicy: {
				directives: {
					...helmet.contentSecurityPolicy.getDefaultDirectives(),
					'img-src': ["'self'", 'data:', 'i.scdn.co', 'tiles.stadiamaps.com'],
					'script-src': ["'self'", 'unpkg.com', "'unsafe-inline'"]
				}
			},
			referrerPolicy: false
		})
	)
	.use(handler)
	.use(compression())
	.listen(3000, (err) => {
		if (err) throw err;
		console.log(` > Running on <host>:3000`);
	});
