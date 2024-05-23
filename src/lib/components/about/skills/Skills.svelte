<script lang="ts">
	import { Bash, Golang, Python, Scss, Typescript } from '$components/assets/techs/languages';
	import { Docker, Git, Linux } from '$components/assets/techs/tools';
	import { Express, Nest, Nextjs, React, Svelte } from '$components/assets/techs/frameworks';
	import { MySQL, Postgres, Redis, SQlite } from '$components/assets/techs/databases';
	import Item from './Item.svelte';
	import { Title } from '$components/shared';

	type Icon = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any[];
	};

	const iconMap: Icon = {
		languages: [Golang, Typescript, Scss, Python, Bash],
		frameworks: [Nest, Express, React, Nextjs, Svelte],
		databases: [Postgres, MySQL, SQlite, Redis],
		tools: [Linux, Docker, Git]
	};
</script>

<div class="skills">
	<Title title={'SKILLS'} />
	<div class="groups">
		<Item title={'LANGUAGES'} components={iconMap['languages']} />
		<Item title={'FRAMEWORKS'} components={iconMap['frameworks']} />
		<Item title={'DATABASES'} components={iconMap['databases']} />
		<Item title={'TOOLS'} components={iconMap['tools']} />
	</div>
</div>

<style lang="scss">
	.skills {
		margin-bottom: 1rem;
		.groups {
			@include flex(center, flex-start);
			flex-direction: column;
		}
	}
</style>
