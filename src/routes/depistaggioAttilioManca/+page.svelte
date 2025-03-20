<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://www.palermotoday.it/~media/horizontal-hi/69917819701031/manca-attilio-3-2.jpg'
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

<h1>Depistaggio Attilio Manca</h1>

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
    <p><i><b>Attilio Manca</b></i> giovane e promettente urologo italiano, originario di Barcellona Pozzo di Gotto, in provincia di Messina, la cui morte, avvenuta nel febbraio 2004, è circondata da numerosi dubbi e controversie.</p>
    <p>La versione ufficiale delle autorità ha concluso che la sua morte è stata causata da un'overdose di eroina, ma molti ritengono che ci siano state gravi omissioni e manipolazioni nel corso delle indagini, sollevando l'ipotesi di un depistaggio.</p>
    <hr>
    <div class="table">
        <div class="row">
            <div class="title">Data e luogo</div>
            <div class="testo">Attilio Manca fu trovato morto il 12 febbraio 2004 nel suo appartamento di Viterbo.</div>
        </div>
        <div class="row">
            <div class="title">Cause della morte</div>
            <div class="testo">La versione ufficiale afferma che sia morto per un'overdose di eroina. Accanto al corpo furono trovate siringhe e tracce della sostanza stupefacente.</div>
        </div>
        <h2>Dubbi e anomalie</h2>
        <div class="row">
            <div class="title">Uso della mano destra</div>
            <div class="testo">Attilio era mancino, ma le iniezioni di eroina sono state trovate nel braccio sinistro, il che ha sollevato dubbi sulla versione ufficiale dei fatti.</div>
        </div>
        <div class="row">
            <div class="title">Mancanza di impronte</div>
            <div class="testo">Sulle siringhe trovate vicino al corpo non furono rilevate impronte digitali, il che è insolito in caso di uso personale di droga.</div>
        </div>
        <div class="row">
            <div class="title">Presenza di lesioni</div>
            <div class="testo">Sul corpo di Manca furono trovate altre lesioni che non sembravano compatibili con un'overdose accidentale, ma piuttosto con una colluttazione.</div>
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
		font-size: 10vh;
	}

    .div-audio{
        margin-top: 4%;
        text-align: center;
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


    .table > .row{
         display: grid;
         grid-template-columns: 1fr 3fr;
         padding: 8px;
         column-gap: 10px;
     }
 
     .row > .title{
         text-align: center;
         box-shadow: 4px 4px #184e77, -1px 0 8px #184e77;
         font-size: 22px;
         padding: 10px;
         border-radius: 4px;
         align-content: center;
     }
     .row > .title:hover{
         background-color: rgb(248, 248, 162);
         cursor: default;
     }
     .row > .testo{
         text-align: center;
         border-radius: 4px;
         box-shadow: 4px 4px #184e77, -1px 0 8px #184e77;
         font-size: 22px;
         padding: 10px;
         align-content: center;
     }
     .row > .testo:hover{
         background-color:  rgb(248, 248, 162);
         cursor: default;
     }
 

    }

    /**MOBILE VERSION*/


    @media(max-width:480px){
        h1{
		text-align: center;
		font-family: "Pacifico", cursive;
		font-weight: 100;
  		font-style: normal;
		font-size: 44px;
	}

    .div-audio{
        margin-top: 4%;
        text-align: center;
    }
    
	.img > img{
		width: 300px;
		height: 250px;
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

    .table > .row{
         display: grid;
         grid-template-columns: 1fr 3fr;
         padding: 8px;
         column-gap: 10px;
     }
 
     .row > .title{
         text-align: center;
         box-shadow: 4px 4px #184e77, -1px 0 8px #184e77;
         font-size: 22px;
         padding: 10px;
         border-radius: 4px;
         align-content: center;
     }
     .row > .title:hover{
         background-color: rgb(248, 248, 162);
         cursor: default;
     }
     .row > .testo{
         text-align: center;
         border-radius: 4px;
         box-shadow: 4px 4px #184e77, -1px 0 8px #184e77;
         font-size: 22px;
         padding: 10px;
         align-content: center;
     }
     .row > .testo:hover{
         background-color:  rgb(248, 248, 162);
         cursor: default;
     }

    }
	
</style>