<script>

    import { onMount } from "svelte";

    import Header from "../lib/components/header.svelte";
    import Footer from "../lib/components/footer.svelte";
    import Card from "../lib/components/card.svelte";
    import Search from "../lib/components/search_components/search.svelte";
    import Noresult from "../lib/components/search_components/noresult.svelte";
    import Menu from "../lib/components/search_components/menu.svelte";
    import StartModal from "../lib/components/startModal.svelte";
    


    import {data} from "../lib/data";

    let tags = []; 
	let selectedtag = "";

	/**-------------------------*/
	
	const getLanguages = () => {
		for (let cardObj of data) {
			if (!tags.includes(cardObj.tag)) {
				tags = [...tags, cardObj.tag]
			}
		}
		tags = tags.sort();
	}	
	onMount(() => getLanguages());
	
	
	
	let filteredCards = [];
	
	// For Select Menu
	$: if (selectedtag) getCardsByLang();
	$: console.log(filteredCards, selectedtag);
	
	const getCardsByLang = () => {
		
		searchTerm = ""; 
		
		if (selectedtag === "all") {
			return filteredCards = [];
		} 
		return filteredCards = data.filter(card => card.tag === selectedtag);

	}	
	
	
	let searchTerm = "";
	
	$: if (searchTerm) selectedtag = "";
	
	const searchcards = () => {	
		return filteredCards = data.filter(card => {
			let cardTitle = card.title.toLowerCase();
			return cardTitle.includes(searchTerm.toLowerCase())
		});
	}

    /*modal*/

    let showModal = false;

    /* let startmodal = true; */

</script>



    <Header  />

    <div class="search_container">
        <Search bind:searchTerm on:input={searchcards} />
        <Menu {tags} bind:selectedtag  />
    </div>


    <div class="container">
        <div class="left">
            <div class="card">
                {#if searchTerm && filteredCards.length === 0}
                <Noresult />	
            {:else if filteredCards.length > 0}
                {#each filteredCards as {tag,link,img, title, description}}
                    <Card {tag} {link} {img} {title} {description}/>
                {/each}	
            {:else}
                {#each data as {tag, link, img, title, description}}
                    <Card {tag} {link} {img} {title} {description} />
                {/each}	
            {/if}
            </div>

            <div class="card_mobile">
                {#if searchTerm && filteredCards.length === 0}
                <Noresult />	
            {:else if filteredCards.length > 0}
                {#each filteredCards as {tag,link,img, title, description}}
                <Card bind:showModal {tag} {link} {img} {title} {description}>
                    <slot/>
                    </Card>
                {/each}	
            {:else}
                {#each data as {tag, link, img, title, description}}
                    <Card  {tag} {link} {img} {title} {description}>
                    <slot/>
                    </Card>
                {/each}	
            {/if}
            </div>
        </div>

        <div class="right">
            <slot/>
        </div>
    </div>


    <Footer />

<style>

:global(body){
    padding: 0;
    margin: 0;
}


@media(min-width:480px){

    .search_container{
        width: 50%;
        margin: auto;
        margin-top: 4%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-shadow: 1px 1px 6px 2px #e85d04;
        padding: 20px;
        background-color: #e85d04;
    }

    .container{
        width: 90%;
        margin: 8vh auto;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }


    .container > .left{
        
        width: 100%;
       height: 800px;

        contain: content;
        overflow-y: scroll; 
        -ms-overflow-style: none; 
        scrollbar-width: none; 
        
    }

    .left > .card{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .left > .card_mobile{
        display: none;
    }

    .container > .right{
        border-radius: 10px;
		box-shadow: 1px 1px 6px 2px #dc2f02;
        padding: 10px;
        height: min-content;
        
        
        
    }

    

}


@media(max-width:480px){

    .container > .right{
        display: none;
    }

    .search_container{
        width: 80%;
        margin: auto;
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        box-shadow: 1px 1px 6px 2px #e85d04;
        padding: 20px;
        background-color: #e85d04;
    }

    .container{
        width: 90%;
        margin:  auto;
        
        display: flex;
        flex-direction: column-reverse;
    }


    .container > .left{
        width: 100%;
        margin: auto;
        
    }

    .left > .card{
        display: none;
    }

    .left > .card_mobile{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }


    


    
}


    
</style>