<script>

    export let titolo;

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&family=Poetsen+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>


<div class="top">
    <span id="icon" class="material-symbols-outlined">
        <a href="/">undo</a>
        </span>
    <h1>{titolo}</h1>

</div>



<style>

    @media(min-width:480px){
        .top > #icon{
            float: left;
            

            
        }

        .top > #icon:hover{

        }
        .top > #icon > a{
            text-decoration: none;
            color: red;
            font-size: 34px;
            
        }

        .top > h1{
            font-family: "Poetsen One", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        text-align: center;
        }
    }

</style>