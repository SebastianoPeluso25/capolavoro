<script>

import {createEventDispatcher} from 'svelte';



import {open_dropdown} from '../store';



export let titolo;
export let link;



</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<a href={link}>
<button class="container"  >
    <h2>{titolo}</h2>

    <span class="material-symbols-outlined">
        open_in_new
        </span>
    </button>
</a>

<style>

a{
    text-decoration: none;
}


button{
    border: none;
}

button:hover{
    cursor: pointer;
}

.container{
        
        background-color: red;
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 50%;
        margin: auto;
        
        align-items: center;
        justify-items: center;
        color: white;
        border-radius: 8px;
        
    }
    .dettagli{
        margin: auto;
        text-align: center;
        border: 1px solid red;
        width: 50%;
    }


</style>