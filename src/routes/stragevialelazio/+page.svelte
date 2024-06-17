<script>
	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		'https://www.lavocedellisola.it/wp-content/uploads/2021/06/ablazio.jpg',
		'https://www.antimafiaduemila.com/images/2023/12/dome-ferdinando-repp.jpg',
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

<h1>Strage di Viale Lazio</h1>

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
    <p>La strage di viale Lazio è stata un evento tragico avvenuto a Palermo il 10 dicembre 1969.</p>
    <p>In quell’occasione, un gruppo di sicari affiliati a Cosa Nostra fece irruzione negli uffici del costruttore Girolamo Moncada in viale Lazio n. 108.</p>
    <p>Il boss mafioso Michele Cavataio, coinvolto nella prima guerra di mafia, fu ucciso insieme a tre suoi collaboratori. Questo evento ebbe gravi conseguenze e portò a processi e condanne .</p>
</div>

<div class="vittime">
    <h2>Coinvolti nell'attentato</h2>
    <div class="table">
        <div class="riga">
            
            <div class="title">Salvatore Bevilacqua</div>
        </div>
        <div class="riga">
            
            <div class="title">Giovanni Domè</div>
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
        row-gap: 4vh;

        
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
	
</style>