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
		gap: 16px;
		position: relative;
		width: 100%;
		margin-bottom: 32px;

		.title {
			text-align: center;
			font-size: 14px;
			font-weight: 300;
		}

		form {
			@include flex;
			flex-direction: column;
			gap: 8px;

			input {
				width: 100%;
				background: var(--bg);
				border: 1.6px solid var(--accent);
				border-radius: 16px;
				font-size: 11px;
				padding: 3px 8px;

				&:focus {
					outline: none;
				}
			}

			textarea {
				background: var(--bg);
				border: 1.6px solid var(--accent);
				border-radius: 16px;
				font-size: 11px;
				padding: 3px 8px;
				&:focus {
					outline: none;
				}
			}

			button {
				width: 100%;
				background: var(--bg);
				border: 1.6px solid var(--accent);
				border-radius: 16px;
				font-size: 11px;
				padding: 3px 8px;
				text-transform: uppercase;
				font-weight: 700;
			}
		}
	}
</style>
