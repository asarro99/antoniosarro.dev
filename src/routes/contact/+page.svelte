<div class="contact">
	<p class="title">
		Are you looking to collaborate, have a specific request, or just chat casually? Just let me
		know!
	</p>
	<form>
		<input type="text" placeholder="name" />
		<input type="text" placeholder="your@email.com" />
		<textarea cols="30" rows="10" placeholder="message"></textarea>
		<button>Send</button>
	</form>
</div>

<style lang="scss">
	.contact {
		@include flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
		width: 100%;
		margin-bottom: 2rem;

		.title {
			text-align: center;
			font-size: 0.9rem;
			color: var(--text);
			font-weight: 300;
		}

		form {
			@include flex;
			flex-direction: column;
			gap: 0.5rem;

			input {
				width: 100%;
				background: var(--bg);
				color: var(--text);
				border: 0.1rem solid var(--accent);
				border-radius: 1rem;
				font-size: 0.7rem;
				padding: 0.2rem 0.5rem;

				&:focus {
					outline: none;
				}
			}

			textarea {
				background: var(--bg);
				color: var(--text);
				border: 0.1rem solid var(--accent);
				border-radius: 1rem;
				font-size: 0.7rem;
				padding: 0.2rem 0.5rem;
				&:focus {
					outline: none;
				}
			}

			button {
				width: 100%;
				background: var(--bg);
				color: var(--text);
				border: 0.1rem solid var(--accent);
				border-radius: 1rem;
				font-size: 0.7rem;
				padding: 0.2rem 0.5rem;
				text-transform: uppercase;
				font-weight: 700;
			}
		}
	}
</style>
