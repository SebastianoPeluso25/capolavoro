<script>
    import { open_dropdown } from "../../store";

    export let id = 0;
    export let titolo;
    export let link_img;
    export let para1,para2;
    export let open = false;

    function change() {
        open =! open;
        $open_dropdown = id;
    }

    $:{
        if ($open_dropdown != id) {
            open = false;
        }
    }
    
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<button class="container" on:click={change} >
    <h2>{titolo}</h2>

    {#if open == false}
    <span class="material-symbols-outlined">
        keyboard_arrow_down
        </span>
    {:else}
    <span class="material-symbols-outlined">
        keyboard_arrow_up
        </span>
    {/if}
    
</button>


{#if open}
<div class="dettagli">
    <img src={link_img} alt="">
    <p>{para1}</p>
    <p>{para2}</p>
</div>
{/if}








<style>

    @media(min-width:480px){
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
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            box-shadow: 2px 2px 20px 3px ;
            border-style: double;
            width: 90%;
            padding: 10px;

            -webkit-animation: animazione 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
                animation: animazione 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
            
        }

        .dettagli > img{
          width: 30%;
          
          
        }
    
    
    @keyframes animazione {
      0% {
        -webkit-transform: rotateX(-100deg);
                transform: rotateX(-100deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 1;
      }
    }
    
    
        .dettagli > p{
            font-size: 20px;
            text-align: justify;
            padding: 10px;
            
        }
    }


    @media(max-width:480px){
        
    }

</style>