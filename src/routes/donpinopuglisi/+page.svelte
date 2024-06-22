<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
        'https://padrepinopuglisi.chiesadipalermo.it/it/wp-content/uploads/layerslider/3P/3P_slide4_0112_volto_scont_470_op80.png',
		'https://www.sangiuseppecab.it/wp-content/uploads/2020/10/pino-puglisi.png',
        'https://padrepinopuglisi.chiesadipalermo.it/it/wp-content/uploads/3P04_varie/3P04_1523.png'
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}

	const back = () => {
		index = (index - 1) % carouselPhotos.length
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap" rel="stylesheet">
</svelte:head>

<h1>Strage Don Pino Puglisi</h1>

<div class="carosello">
	<button on:click={back}> <span class="material-symbols-outlined">
		arrow_back_ios
		</span> </button>
	<div class="img">
		{#each [carouselPhotos[index]] as src (index)}
		<img  {src} alt="" />
		{/each}
	</div>
<button on:click={next}><span class="material-symbols-outlined">
	arrow_forward_ios
	</span></button>
</div>

<div class="descrizione">
    <p><span id="importante" >Don Pino Puglisi</span> nato Il 15 settembre 1993 nato il 15 settembre 1937 a Palermo, in Sicilia. Entrò nel seminario giovanile e fu ordinato sacerdote nel 1960. Da subito si distinse per il suo impegno verso i più giovani, cercando di offrire loro un'alternativa alla strada attraverso l'istruzione e l'educazione cristiana. </p>
    <p>Come sacerdote nel quartiere di Brancaccio, decise di non restare in silenzio di fronte alla criminalità dilagante.</p>
    <p>Organizzò attività ricreative e culturali per offrire alternative sane alla gioventù locale, cercando di rompere il circolo vizioso della povertà e del crimine.</p>
    <p>La sua presa di posizione contro la mafia non passò inosservata. Nonostante le minacce e i tentativi di intimidazione, Don Puglisi continuò a svolgere il suo ministero con coraggio e determinazione. </p>

    <p>Il <span id="importante">15 settembre 1993</span>, giorno del suo 56º compleanno, Don Puglisi fu brutalmente assassinato.</p>

    <p>L'omicidio di Don Puglisi suscitò una forte reazione pubblica in Italia e all'estero, evidenziando la brutalità della mafia e l'eroismo di coloro che si oppongono ad essa. Il suo funerale fu un evento di massa, con migliaia di persone che gli resero omaggio.</p>
    <p>Nel 2013, Papa Francesco beatificò Don Pino Puglisi, riconoscendolo come martire della fede. Questo gesto sottolinea il suo sacrificio personale nella lotta contro il male e il suo esempio di coraggio civile e spirituale.</p>
    
    

    
</div>







<style>

	h1{
		text-align: center;
		font-family: "Pacifico", cursive;
		font-weight: 100;
  		font-style: normal;
		font-size: 10vh;
	}

    .descrizione > p > #importante{
        font-style: italic;
        font-weight: bold;

    }

	.img > img{
		width: 600px;
		height: 350px;
		border-radius: 2vh;
	}

	.carosello > button{
		border-radius: 50%;
		height: 40px;
		background-color: none;
		border: none;
		
	}

	.carosello > button:hover{
		background-color: orange;
		color: white;
		cursor: pointer;
	}

	.carosello{
		width: 100%;
		display: flex;
		flex-direction: row;
		margin: auto;
		justify-content: center;
		align-items: center;
		
	}

	.descrizione > p{
        text-align: justify;
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .descrizione{
        width: 86%;
        margin: auto;
    }
	
</style>