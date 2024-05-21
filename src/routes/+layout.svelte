<script>

    import { onMount } from "svelte";

    import Header from "../lib/components/header.svelte";
    import Footer from "../lib/components/footer.svelte";
    import Card from "../lib/components/card.svelte";
    import Search from "../lib/components/search_components/search.svelte";
    import Noresult from "../lib/components/search_components/noresult.svelte";
    import Menu from "../lib/components/search_components/menu.svelte";


    import {data} from "../lib/data";

    let tags = []; // menu built from bookData
	let selectedtag = ""; //  menu selection	

	
	
	const getLanguages = () => {
		for (let bookObj of data) {
			if (!tags.includes(bookObj.tag)) {
				tags = [...tags, bookObj.tag]
			}
		}
		tags = tags.sort();
	}	
	onMount(() => getLanguages());
	
	
	// Query results
	let filteredBooks = [];
	
	// For Select Menu
	$: if (selectedtag) getBooksByLang();
	$: console.log(filteredBooks, selectedtag);
	
	const getBooksByLang = () => {
		// resets search input if menu is being used
		searchTerm = ""; 
		
		if (selectedtag === "all") {
			return filteredBooks = [];
		} 
		return filteredBooks = data.filter(book => book.tag === selectedtag);

	}	
	
	// For Search Input
	let searchTerm = "";
	// resets language menu if search input is used
	$: if (searchTerm) selectedtag = "";
	
	const searchBooks = () => {	
		return filteredBooks = data.filter(book => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase())
		});
	}

</script>

    <Header  />

    <div class="search_container">
        <Search bind:searchTerm on:input={searchBooks} />
        <Menu {tags} bind:selectedtag  />
    </div>

    <div class="container">
        <div class="left">
            <div class="card">
                {#if searchTerm && filteredBooks.length === 0}
                <Noresult />	
            {:else if filteredBooks.length > 0}
                {#each filteredBooks as {tag,link,img, title, description}}
                    <Card {tag} {link} {img} {title} {description}/>
                {/each}	
            {:else}
                {#each data as {tag, link, img, title, description}}
                    <Card {tag} {link} {img} {title} {description} />
                {/each}	
            {/if}
            </div>

        </div>
        <div class="right">
            <slot />
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
        
        
        
    }

    .left > .card{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
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
        
        display: grid;
        grid-template-columns: 1fr;
    }


    .container > .left{
        
        width: 100%;
        margin: auto;
        
    }

    .left > .card{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }


    
}


    
</style>