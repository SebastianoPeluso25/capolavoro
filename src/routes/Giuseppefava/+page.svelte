<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://www.articolo21.org/wp-content/uploads/2017/01/Giuseppe-Fava.jpg',
		'https://www.raiplay.it/resizegd/1200x675/dl/img/2020/01/03/1578047741525_2048x1152logo.jpg',
		'https://www.minimaetmoralia.it/wp/wp-content/uploads/2013/01/assassinio_pippo_fava_4-gennaio_1984.jpg'
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

<h1>Omicidio di Giuseppe Fava</h1>

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
    <p>È nato a Palazzolo Acreide (SR) il 15 settembre 1925 ed è morto a Catania il 5 Gennaio 1984.</p>
    <p>Laureato in Legge, si è sempre occupato di giornalismo e di teatro.</p>
    <p>È stato direttore responsabile del “Giornale del Sud” e fondatore del “I Siciliani”, secondo giornale antimafia in Sicilia.</p>
    <p id="dichiarazione">«A che serve essere vivi, se non c'è il coraggio di lottare?»<br>(Giuseppe Fava, La Violenza)</p>
    <p>Ha iniziato la sua carriera da giornalista occupandosi di vari argomenti dalla cronaca al calcio. <br>Un'altra attività a cui si è dedicato molto è stata quella del teatro e del cinema, scrivendo sceneggiature per film e libri per opere teatrali, vincendo anche premi internazionali come l’Orso d’Oro.</p>
    <p>Continuava la sua attività di giornalista denunciando i soprusi e cercando di fare emergere la verità per «realizzare giustizia e difendere la libertà».</p>
    <p>Per meglio svolgere questa attività di denuncia, nel 1982 fonda il giornale “I Siciliani” giornale di inchiesta su svariati temi: dalla devastazione dell’ambiente ai traffici di droga.</p>
    <p>Sempre sul suo giornale vennero fatti degli articoli che denunciavano la connivenza tra Cosa Nostra, Imprenditoria e Politica</p>
    <p>Il 28 dicembre 1983 rilascia la sua ultima intervista a Enzo Biagi nella trasmissione Film Story in onda sulla Televisione della Svizzera Italiana, sette giorni prima del suo assassinio, dove dichiara che i mafiosi sono ovunque.</p>
    <p id="dichiarazione" >“Mi rendo conto che c'è un'enorme confusione sul problema della mafia. I mafiosi stanno in Parlamento, i mafiosi a volte sono ministri, i mafiosi sono banchieri, i mafiosi sono quelli che in questo momento sono ai vertici della nazione. Non si può definire mafioso il piccolo delinquente…”</p>

    <p>Il 5 Gennaio 1984 fu assassinato mentre si trovava in via dello Stadio e stava andando a prendere la nipote,  al Teatro Verga che recitava in Pensaci, Giacomino di Pirandello!</p>
    <p>Aveva appena lasciato la redazione del suo giornale. Non ebbe il tempo di scendere dalla sua Renault 5 che fu ucciso da cinque proiettili.</p>
    <p>Dopo la sua morte la rivista “I Siciliani” continuò a pubblicare articoli con la redazione che lui aveva formato.</p>
    <p>Nel 2018 la RAI ha dedicato la Fiction “Prima che la notte” sulla vita di Giuseppe Fava</p>
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

    }
	
</style>