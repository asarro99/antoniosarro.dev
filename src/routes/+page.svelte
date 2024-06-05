<script lang="ts">
	import { Blog, Hero, Project } from '$components/home';
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
