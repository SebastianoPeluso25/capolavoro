<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://cross.unimi.it/wp-content/uploads/2023/03/47c99f869fe339e66349cfa22fb7ed.png',
		'https://laragione.eu/wp-content/themes/yootheme/cache/f5/Evidenza-sito-32-2-f57b525d.png',
		
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}

	const back = () => {
		index = (index - 1) % carouselPhotos.length
	}


	import audio from '$lib/dallachiesa.mp3';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap" rel="stylesheet">
</svelte:head>

<h1>Omicidio Carlo Alberto Dall'Chiesa</h1>

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

<div class="div-audio">
    <audio controls>
        <source class="audio" src={audio} type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
</div>

<div class="descrizione">
    <p>La sera del 3 settembre 1982 il Generale Carlo Alberto dalla Chiesa decise di andare a mangiare a cena con sua moglie a Mondello.</p>
    <p> Salirono sulla macchina della moglie, una Autobianchi A112 alla cui guida si mise lei, seguita a breve distanza dall'Alfetta di scorta su cui viaggiava Domenico Russo</p>
    <p> il Generale scoprì delle parentele in ambienti mafiosi di due dipendenti, che prontamente fece trasferire, ma evidentemente non ebbe il tempo di ripulire l'intera prefettura.</p>
	<p>Intorno alle 21.10 l'Alfetta di Domenico Russo venne affiancata da una motocicletta su cui viaggiavano un killer e il mafioso Pino Greco, il quale aprì il fuoco con un Kalashnikov AK-47 sull'agente di scorta, che nonostante i colpi uscì dall'auto per tentare, invano, di difendere il Generale e la consorte.</p>
	<p>Antonino Madonia e Calogero Ganci, guidando una BMW 518, raggiunsero l'auto su cui viaggiava il Generale dalla Chiesa uccidendo la coppia con 30 colpi di AK-47. </p>
	<p> L'auto su cui stavano viaggiando si scontra contro una Fiat parcheggiata. Il sicario scese dall'auto e sparò l'ultimo colpo, quello definitivo, al volto del Generale.</p>
	<p></p>
</div>

<div class="vittime">
    <h2>Vittime</h2>
    <div class="table">
        <div class="riga">
            
            <div class="title">Carlo Alberto Dalla Chiesa </div>
        </div>
		<div class="riga">
			
            <div class="title">Emanuela Setti Carraro </div>
        </div>
        <div class="riga">
            
            <div class="title">Domenico Russo </div>
        </div>
        
    </div>
</div>




<style>

	@media(min-width:480px){
		h1{
		text-align: center;
		font-family: "Pacifico", cursive;
		font-weight: 100;
  		font-style: normal;
		font-size: 44px;
	}
	
	.img > img{
		width: 600px;
		height: 350px;
		border-radius: 2vh;
	}

	.div-audio{
        margin-top: 4%;
        text-align: center;
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
        font-size: 25px;
        font-family: "Pacifico", cursive;
        width: 40%;
		

    }
	}

	@media(max-width:480px){
		h1{
		text-align: center;
		font-family: "Pacifico", cursive;
		font-weight: 100;
  		font-style: normal;
		font-size: 44px;
	}
	
	.img > img{
		width: 300px;
		height: 250px;
		border-radius: 2vh;
	}

	.div-audio{
        margin-top: 4%;
        text-align: center;
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
        font-size: 25px;
        font-family: "Pacifico", cursive;
        width: 40%;
		

    }
	}

	
</style>