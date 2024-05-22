<script>
    import HeaderTop from "../../lib/components/headerTop.svelte";
    import Dolormafia from "../../lib/components/home/dolormafia.svelte";

    
</script>



<HeaderTop titolo="Il Dolor di mafia" />

<div class="list_accordion">
    <Dolormafia
    id=1
    titolo="di una madre ... Felicia Impastato"
    />

 <Dolormafia
    id=2
    titolo="di un fratello ... Salvatore Borsellino"
    />

 <Dolormafia 
    id=3
    link_img="https://maredilibri.it/festival//immagini/maria_falcone.jpg"
    titolo="di una sorella ... Maria Falcone"
    para1="Maria Falcone condivide il suo dolore privato per la perdita del fratello Giovanni e ricorda
    come dopo quel maledetto 23 maggio del 1992 la rabbia e l&#39;indignazione delle persone
    abituate a continui delitti si siano trasformate in pretesa di giustizia."
    para2="La sorella di Giovanni
    Falcone, costantemente impegnata in prima fila in un progetto per la cultura della legalità
    soprattutto tra i più giovani, ci ricorda come l&#39;indignazione si sia trasformata in uno
    strumento attivo per affrontare e combattere la mafia."
    />

  <Dolormafia
    id=4
    titolo="di una moglie ... "
    />

</div>





<style>

    @media(min-width:480px){
        .list_accordion{
            display: flex;
            flex-direction: column;
            row-gap: 4vh;
            
        }
    }


    @media(max-width:480px){
        .list_accordion{
            display: flex;
            flex-direction: column;
            row-gap: 2vh;
            
        }
    }

</style>