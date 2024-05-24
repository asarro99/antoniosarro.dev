import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	return {
		posts: await getDummyPost()
	};
};

type DummyResponse = {
	posts: DummyBlog[];
};

export type DummyBlog = {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: {
		likes: number;
		dislikes: number;
	};
	views: number;
	userId: number;
};

async function getDummyPost() {
	const postResponse: DummyResponse = await fetch('https://dummyjson.com/posts').then((res) =>
		res.json()
	);
	return postResponse.posts;
}
