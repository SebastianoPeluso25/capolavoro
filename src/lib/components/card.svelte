<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import Modal from './modal.svelte';
	
	import 'framework7-icons';
	export let title;
	export let description;
    export let img;
    export let link;
	export let tag;

	export let showModal = false;

let dialog; // HTMLDialogElement

$: if (dialog && showModal) dialog.showModal();

	

	

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>




<section class="book"
		transition:scale={{duration: 1000, easing: expoInOut}}>

		<div class="item"  >
            <img src={img} alt="">
            <h1>{title}</h1>
			
			<div class="tag">
				{tag}
			</div>
			<div class="small-description">
				<p>{description}</p>
			</div>
			
			<button class="pc"  ><a href={link} >Leggi</a></button>
			<button class="mobile" on:click={()=>showModal = true} ><a href={link} >Leggi</a></button>
			
		</div>


</section>

	<Modal bind:showModal>
		<slot/>
	</Modal>







<style>
	@media(min-width:480px){
		.book { 
			width: 85%;
			border-radius: 8px;
			box-shadow: 1px 1px 6px 2px #dc2f02;
			margin: 8px auto;
			background-color: white;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
			
		}




		.item > .pc{
			color: white;
			background-color: #dc2f02;
			border: none;
			padding: 10px;
			margin: 10px;
			border-radius: 8px;
			font-size: 22px;
		}

		.item > .mobile{
			display: none;
		}


		button > a{
			text-decoration: none;
			color: white;
			
		}

		.item > .tag {
			background-color: #ffac97;
			font-size: 14px;
			padding: 8px;
			border: 2px solid red;
			border-radius: 10px;
			
		}

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			
			font-size: 25px;
			
			
			
		}

        .item:hover{
            
        }
        .item > h1{
			width: 80%;
            font-size: 30px;
			font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        .item > img{
            width: 100%;
        }

		.item > .small-description{
			width: 80%;
		}

		.item > .small-description > p{
			font-size: 14px;
			text-align: center;
		}

	}

	/**MOBILE  */

	@media(max-width:480px){
		.book { 
			width: 85%;
			border-radius: 8px;
			box-shadow: 1px 1px 6px 2px #dc2f02;
			margin: 8px auto;
			background-color: white;
			font-family: Verdana, Geneva, Tahoma, sans-serif;
			
		}



		.item > .mobile{
			color: white;
			background-color: #dc2f02;
			border: none;
			padding: 10px;
			margin: 10px;
			border-radius: 8px;
			font-size: 22px;
			

		}

		.item > .pc{
			display: none;
		}

		button > a{
			text-decoration: none;
			color: white;
			
		}

		.item > .tag {
			background-color: #ffac97;
			font-size: 14px;
			padding: 8px;
			border: 2px solid red;
			border-radius: 10px;
			
		}

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			
			font-size: 25px;
			
			
			
		}

        .item:hover{
            cursor: pointer;
        }
        .item > h1{
			width: 80%;
            font-size: 30px;
			font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        .item > img{
            width: 100%;
        }

		.item > .small-description{
			width: 80%;
		}

		.item > .small-description > p{
			font-size: 14px;
			text-align: center;
		}
	
	}
	

	
</style>