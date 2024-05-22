<script>
    

    

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<div class="nav">
    <div class="item">
        <span class="material-symbols-outlined">
            <a href="/">home</a>
            </span>
    </div>
    <div class="item">
        <span class="material-symbols-outlined"></span>
    </div>

</div>






<style>


@media (min-width: 480px){
    .nav{
    display: flex;
    flex-direction: row;
    background-color: #9d0208;
    justify-content: center;
    justify-content: space-around;
    padding: 8px;
    column-gap: 20px;


    
    
}

a{
    text-decoration: none;
    color: #f48c06;
}



.item > span{
    font-size: 40px;
    color: #aaf683;
}

.item{
    display: flex;
    align-items: center;
    column-gap: 10px;
    
}

.item > input{
    padding: 4px;
}

.item > span:hover{
    cursor: pointer;
}
}

:global(body){
    padding: 0;
    margin: 0;
}


/**MOBILE VERSION*/


@media (max-width: 480px){
    .nav{
    display: flex;
    flex-direction: row;
    background-color: red;
    
    justify-content: center;
    
    justify-content: space-around;

    padding: 8px;

    
}

.item{
    display: flex;
    align-items: center;
    column-gap: 10px;
    
}

.item > input{
    padding: 4px;
    background-color: #b7efc5;
}

a{
    text-decoration: none;
    color: #aaf683;
}

.item > span{
    font-size: 40px;
    color: #aaf683;
}

.item > span:hover{
    cursor: pointer;
}
}

:global(body){
    padding: 0;
    margin: 0;
}





</style>