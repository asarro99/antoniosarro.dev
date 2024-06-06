<script lang="ts">
	import { calculateAge } from '$utils/date';
</script>

<div class="hero">
	<h2 class="title">Hello! I&#39;m Antonio Sarro <span>👋🏼</span></h2>
	<p class="description">
		<span class="paragraph">
			I&#39;m a <span class="hightlight">{calculateAge(new Date('1999-11-16'))}</span> years old
			software engineer based in
			<span class="hightlight">Italy</span>. I&#39;ve always had a strong
			<span class="hightlight">passion</span> and predisposition for hardware and IT since I was a
			child, which has always pushed me to learn and delve deeper into this field. Being a very
			<span class="hightlight">curious</span>
			person who always wants to discover something new, I like to study and understand new technologies
			for personal of future projects.
		</span>
		<span class="paragraph">
			In my free time, I enjoy listening to <span class="hightlight">music</span>, playing
			<span class="hightlight">games or chess</span> and going to the
			<span class="hightlight">gym</span>.
		</span>
	</p>
</div>

<style lang="scss">
	.hero {
		@include flex;
		flex-direction: column;
		gap: 3px;
		margin-bottom: 16px;

		.title {
			font-size: 16px;

			span {
				animation-name: wave;
				animation-duration: 2.5s;
				animation-iteration-count: infinite;
				transform-origin: 70% 70%;
				display: inline-block;
			}

			@keyframes wave {
				0% {
					transform: rotate(0deg);
				}
				10% {
					transform: rotate(14deg);
				}
				20% {
					transform: rotate(-8deg);
				}
				30% {
					transform: rotate(14deg);
				}
				40% {
					transform: rotate(-4deg);
				}
				50% {
					transform: rotate(10deg);
				}
				60% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(0deg);
				}
			}
		}

		.description {
			@include flex;
			flex-direction: column;
			gap: 8px;
			font-size: 0.7em;
			text-align: justify;

			.paragraph {
				display: block;
			}

			.hightlight {
				color: var(--accent);
				font-weight: bold;
			}
		}
	}
</style>
