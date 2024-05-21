<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqlgsRh5V4QIowc0_SUqhVqUubQuO02AAA5xrvFiCqA&s',
		'https://www.varesenews.it/photogallery_new/images/2020/07/il-ricordo-di-paolo-borsellino-all-albero-della-pace-1164368.610x431.jpg',
		'https://www.poliziadistato.it/statics/27/borsellino-550x245.webp?art=1'
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

<h1>Strage di Via D'Amelio</h1>

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
    <p>Il 19 luglio 1992, dopo aver pranzato con la moglie ed i figli, il giudice si è recato insieme alla scorta in via D'Amelio a trovare la madre.</p>
    <p>Qui una Fiat 126, parcheggiata vicino alla casa della madre di Borsellino, sulla quale erano stati messi 100 kg di esplosivo, è stata fatta esplodere al passaggio del giudice.</p>
    <p>Nell'attentato, oltre a Paolo Borsellino, sono morti cinque agenti della scorta</p>
    <p>L'unico sopravvissuto è stato Antonino Vullo, che stava parcheggiando una delle auto e si trovava più lontano dal punto dello scoppio.</p>
    <p>In seguito all'attentato subito a Giovanni Falcone, Paolo Borsellino aveva chiesto alla questura di far rimuovere le auto nella zona intorno alla casa della madre. Ma la sua richiesta non venne accettata.</p>
</div>

<div class="vittime">
    <h2>Coinvolti nell'attentato</h2>
    <div class="table">
        <div class="riga">
            <img src="https://vivi.libera.it/documenti/anagrafiche/agostino_catalano.jpg" alt="catalano">
            <div class="title">Agostino Catalano</div>
        </div>
        <div class="riga">
            <img src="https://cdn.gelestatic.it/repubblica/invececoncita/2017/07/Emanuela-loi.jpg" alt="emanuela loi">
            <div class="title">Emanuela Loi</div>
        </div>
        <div class="riga">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUq9xgT58Bx-sm9nNP2Ctq6HwEoFP7xUTl7rVIMWxRg&s" alt="montinaro">
            <div class="title">Vincenzo Fabio Li Muli</div>
        </div>
        <div class="riga">
            <img src="https://www.associazionevaleria.com/wp-content/uploads/2019/11/traina.jpg" alt="dicilio">
            <div class="title">Rocco Dicilio</div>
        </div>
		<div class="riga">
            <img src="https://www.associazionevaleria.com/wp-content/uploads/2019/11/Eddie-Walter-Cosina.jpg" alt="cosina">
            <div class="title">Eddie Walter Cosina</div>
        </div>
    </div>
</div>




<style>

	h1{
		text-align: center;
		font-family: "Pacifico", cursive;
		font-weight: 100;
  		font-style: normal;
		font-size: 10vh;
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

    .vittime > h2{
        text-align: center;
        font-family: "Pacifico", cursive;
		font-weight: 100;
        font-size: 34px;
  		font-style: normal;

    }

    .vittime{
        margin: auto;
        width: 86%;
        
    }

    .vittime > .table{
        display: grid;
        margin: auto;
        row-gap: 2vh;

        
    }

    .table > .riga{
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 4vh;
        justify-content: center;
    }

    .riga > img{
        width: 80px;
        height: 90px;
        border-radius: 8px;
        
        box-shadow: 4px 1px 4px 1px orange;
    }

    .riga > .title{
        font-size: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        width: 30%;

    }
	
</style>