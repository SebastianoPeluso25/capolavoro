<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://www.blogsicilia.it/wp-content/uploads/sites/2/2019/10/Stele-Falcone-Capaci-autostrada.jpg',
		'https://www.raicultura.it/dl/img/2019/02/14/1550148232540_154652563711237414_buona.jpg',
		'https://www.blogsicilia.it/wp-content/uploads/sites/2/2022/02/giardino-memoria-.jpg'
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

<h1>Strage di Capaci</h1>

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
    <p>Il 23 maggio 1992 il giudice Falcone stava tornando a casa da Roma, come faceva solitamente nel fine settimana, insieme alla moglie Francesca.</p>
    <p>Partito da Ciampino con un jet di servizio intorno alle 16:45, atterra all'aeroporto Punta Raisi di Palermo.<br> Qui trova ad attenderlo 3 Fiat Croma blindate con la scorta.</p>
    <p>Falcone si mette alla guida della Croma bianca. In macchina con lui ci sono la moglie e l'autista giudiziario Giuseppe Costanza. </p>
    <p>le prime due macchine sono blindate, mentre la terza no. Quella con Falcone alla guida è l'auto in mezzo.</p>
    <p>Sull'autostrada A29, nei pressi dello svincolo di Capaci, vicino a Palermo.</p>
    <p></p>
    <p>Giovanni Brusca e i suoi scagnozzi riempiono 5 metri di conduttura con 500 chili di tritolo stivati in 13 bidoncini, usando uno skateboard per farli scivolare nel buio. Confezionano il detonatore con esplosivo T4. L’innesco è collegato al telecomando di una banalissima auto giocattolo.​</p>
    <p>I killer sono Giovanni Brusca e i suoi soldati, appostati sull’altura a 600 metri in linea d’aria, coperti da una centralina Enel. Brusca ha provato la sincronia una decina di volte, mentre una delle sue auto correva alla velocità stabilita.</p>
</div>

<div class="vittime">
    <h2>Coinvolti nell'attentato</h2>
    <div class="table">
        <div class="riga">
            <img src="https://upload.wikimedia.org/wikipedia/it/c/c6/Morvillo_francesca.jpg" alt="morvillo">
            <div class="title">Francesca Morvillo</div>
        </div>
        <div class="riga">
            <img src="https://vivi.libera.it/documenti/anagrafiche/vito_schifani_in_divisa.jpg" alt="schifani">
            <div class="title">Vito Schifani</div>
        </div>
        <div class="riga">
            <img src="https://upload.wikimedia.org/wikipedia/it/2/2b/Antoninomontinaro.jpg" alt="montinaro">
            <div class="title">Antonio Montinaro</div>
        </div>
        <div class="riga">
            <img src="https://vivi.libera.it/documenti/anagrafiche/rocco_in_divisa.jpeg" alt="dicilio">
            <div class="title">Rocco Dicilio</div>
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