<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click>
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<button  on:click={() => dialog.close()}>close</button>
	</div>
</dialog>

<style>
	@media(max-width:480px){
		dialog {
		max-width: 90%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin-top: 5%;
	}

	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
		margin: auto;
		background-color: red;
		color: white;
		font-size: 20px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		border: none;
		padding: 8px;
		border-radius: 8px;
		position: sticky;
		bottom: 0;
	}
	}
	
</style>
