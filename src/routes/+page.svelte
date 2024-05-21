<script lang="ts">
	import { Blog } from '$components/home/blog';
	import { Hero } from '$components/home';
	import { Project } from '$components/home/project';
	import type { TRACK_STATUS } from '$types/spotify/index.js';
	import type { Track } from '$types/spotify/zod/types.js';

	const {
		data
	}: {
		data: {
			spotify: {
				status: TRACK_STATUS;
				track: Track;
			};
		};
	} = $props();
</script>

<Hero spotify={data.spotify} />
<Blog />
<Project />
