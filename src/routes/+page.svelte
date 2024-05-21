<script>

    import Accordion from "../lib/components/accordion.svelte";
    let titolo;
    

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&family=Poetsen+One&display=swap" rel="stylesheet">
        <title>Home</title>
</svelte:head>

<h1>Benvenuto ed esplora</h1>

<div class="accordion">
    <Accordion id=1   titolo="La storia della mafia" link="/storiadellamafia/" />
    <Accordion id=2  titolo="La mafia oggi ( CyberMafia )"  link="/mafiaoggi/" />
    <Accordion id=3  titolo="Il dolor di Mafia"  link=/dolormafia/ />
</div>







<style>

    @media(min-width:480px){
        .accordion{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    h1{
        font-family: "Poetsen One", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        text-align: center;
    }
    }



</style>