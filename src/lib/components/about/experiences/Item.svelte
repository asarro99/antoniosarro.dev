<script lang="ts">
	import { Calendar, Position, Work } from '$components/assets/symbols';

	type Props = {
		position: string;
		company: string;
		date: string;
	};

	const { position, company, date }: Props = $props();
</script>

<li class="position">
	<div class="wrapper">
		<div class="timestamp">
			<div class="icon">
				<Calendar />
			</div>
			{date}
		</div>
		<div class="company">
			<div class="icon">
				<Position />
			</div>
			{company}
		</div>
		<div class="name">
			<div class="icon">
				<Work />
			</div>
			{position}
		</div>
	</div>
</li>

<style lang="scss">
	.position {
		position: relative;
		padding-left: 4rem;

		&::before {
			content: '';
			background-color: #293138;
			position: absolute;
			top: 50%;
			left: 1rem;
			width: 1.6rem;
			height: 1.6rem;
			border-radius: 50%;
			transform: translateY(-50%);
			z-index: 1;
			transition: all 0.3s ease-in-out;
		}

		&::after {
			content: '';
			position: absolute;
			top: calc(50% + 1.3rem);
			left: 1.8rem;
			border-left: 2px dashed #293138;
			height: calc(100% + 3rem - 2.6rem);
			transform: translateX(-50%);
			z-index: 0;
		}

		&:last-child::after {
			display: none;
		}

		&:hover::before {
			background-color: var(--accent);
			transition: all 0.3s ease-in-out;
		}

		.wrapper {
			@include flex(center, flex-start);
			flex-direction: column;
			gap: 0.3rem;
			border: 0.1rem solid var(--accent);
			border-radius: 1rem;
			padding: 0.5rem 0.5rem;
			min-width: 12rem;
			transition: all 0.3s ease-in-out;

			.timestamp,
			.company,
			.name {
				@include flex;
				gap: 0.4rem;
				font-weight: 600;
				font-size: 0.55em;
				text-transform: uppercase;
				color: var(--accent);
				transition: all 0.3s ease-in-out;

				.icon {
					width: 1rem;
					height: 1rem;
					transform: scale(0.8);
				}
			}
		}

		&:hover {
			.wrapper {
				background-color: var(--accent);

				.timestamp,
				.company,
				.name {
					color: var(--text);
				}
			}

			.name::before {
				content: '';
				position: absolute;
				border-left: 2px solid var(--accent);
				height: 80%;
				transform: translateY(-50%);
				top: 50%;
				left: 20%;
				color: var(--accent);
				animation: line 0.3s ease-in-out;
			}
		}
		@keyframes line {
			from {
				height: 0%;
			}
			to {
				height: 80%;
			}
		}
	}
</style>
