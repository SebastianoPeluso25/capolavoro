<script>
    import { data } from "../data";

    export let showModal = true;

    let bool = 0;

    let dialog;

	
    
    $: if (bool == 0 && dialog && showModal) dialog.showModal();
	
	function closedialog() {
		
		dialog.close();
		bool = 1;
		
		
	}

	
    
    
</script>


<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<p>Per una miglior performance si consiglia di utilizzare la versione desktop</p>
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={closedialog}>Prosegui lo stesso</button>
	</div>
</dialog>



<style>
    @media(max-width:480px){
		dialog {
		max-width: 90%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		margin-top: 60%;
	}

    dialog > div > p{
        text-align: justify;
        font-size: 20px;
    }
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.759);
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
        border: none;
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


	@media(min-width:480px){
		dialog{
			display: none;
		}
	}

</style>